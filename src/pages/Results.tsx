import React, { useContext } from "react";
import { AppContext } from "../App";
import { PieChart } from 'react-minimal-pie-chart';

const Results = () => {
  const [appData] = useContext(AppContext);

  return (
    <div>
      Results:
      {Object.entries(appData.answers).map(([currentIndex, answer]: any) => (
        <p key={currentIndex}>{answer.value}</p>
      ))}
      Score:
    <PieChart
    center={[20, 15]}
    radius={10}
    data={[
    { title: 'One', value: 50, color: '#E38627' },
    { title: 'Two', value: 50, color: '#C13C37' },
  ]}
/>
    </div>
  );
};


export default Results;
