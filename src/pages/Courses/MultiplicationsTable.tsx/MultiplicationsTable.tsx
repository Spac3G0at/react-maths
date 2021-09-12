import React from "react";
import Card from "../../../components/Card/Card";
import Page from "../../../layout/Page/Page";
import "./MultiplicationsTable.scss";

const nums = [2, 3, 4, 5, 6, 7, 8, 9];

const MultiplicationsTable: React.FC = () => {
  return (
    <Page className="MultiplicationsTable">
      <h3>Tables</h3>
      <Card>
        <div className="flex">
          <table>
            <tbody>
              <tr>
                <td>
                  <span style={{ visibility: "hidden" }}>10</span>
                </td>
                {nums.map((num: number) => {
                  return (
                    <td className="study-col" key={num}>
                      {num}
                    </td>
                  );
                })}
              </tr>
              {nums.map((num: number) => {
                return (
                  <tr key={num}>
                    <td className="study-col">{num}</td>
                    {nums.map((num2: number) => {
                      return <td key={num2}>{num2 * num}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </Page>
  );
};

export default MultiplicationsTable;
