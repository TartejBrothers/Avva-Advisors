import React from "react";

export default function FeeCard() {
  return (
    <div className="feecard">
      <h4>Fee Card</h4>
      <p>
        Avva Advisors offers a wide range of services to help individuals and
        businesses navigate the complex world of tax and immigration in Ireland.
      </p>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Price (€)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Form 12 Filing (PAYE)</td>
            <td>€50</td>
          </tr>
          <tr>
            <td>Form 11 Filing (Self-Assessment)</td>
            <td>€100</td>
          </tr>
          <tr>
            <td>CGT Filing (additional)</td>
            <td>€75</td>
          </tr>
          <tr>
            <td>Help-to-Buy / First Home Scheme Filing</td>
            <td>€100</td>
          </tr>
          <tr>
            <td>Financial and Investments Advisory</td>
            <td>€75/hour</td>
          </tr>
          <tr>
            <td>
              Small Business Package (inc. 1 payroll + reg. among all forms)
            </td>
            <td>€1500</td>
          </tr>
          <tr>
            <td>Umbrella Company Services</td>
            <td>€75/month</td>
          </tr>
          <tr>
            <td>CSEP / General Employment Permit Filing</td>
            <td>€400</td>
          </tr>
          <tr>
            <td>
              Stamp 0 / Stamp 5 / Stamp 6 / Stamp IG Extension Applications
            </td>
            <td>€200</td>
          </tr>
          <tr>
            <td>Naturalisation - Adult and Baby</td>
            <td>€200</td>
          </tr>
          <tr>
            <td>Citizenship by Birth</td>
            <td>€100</td>
          </tr>
          <tr>
            <td>Visas from India</td>
            <td>€50</td>
          </tr>
          <tr>
            <td>Career ReStart</td>
            <td>€149</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
