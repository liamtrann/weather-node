import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [observationData, setObservationData] = useState();
  const [shortTermData, setShortTermData] = useState();

  const formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };
  const formatDate = (data) => {
    const date = new Date(data).getUTCDate();
    const month = new Date(data).getMonth() + 1;
    const time = formatAMPM(new Date(data));
    return `${date}/${month} - ${time}`;
  };
  const formatData = (label, allData) => {
    return {
      labels: allData.map((data) => formatDate(data.dateTime)),
      datasets: [
        {
          label: label,
          data: allData.map((data) => data.temperature),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    };
  };
  useEffect(() => {
    axios
      .get(`/api/observation`)
      .then((resp) => {
        setObservationData(formatData("observation", resp.data));
      })
      .catch((err) => console.log(err));

    axios
      .get(`/api/shortTerm`)
      .then((resp) => {
        setShortTermData(formatData("shortTerm", resp.data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        {observationData && <LineChart chartData={observationData} />}
      </div>
      <div style={{ width: 700 }}>
        {shortTermData && <BarChart chartData={shortTermData} />}
      </div>
    </div>
  );
}

export default App;
