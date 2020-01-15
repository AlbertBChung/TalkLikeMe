import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Table } from 'reactstrap';

function VocabList(props) {
  const list = props.words.map((invoice, index) => {
    return (
       <tr key={index}>
           <td>
             A
           </td>
           <td>
             B
           </td>
       </tr>
    )
  })

  return (
    <Card style={{}}>
        <CardBody>
            {props.mascot}
            <CardTitle>{props.title}</CardTitle>
            <Table responsive>
              <thead className="text-primary">
                <tr>
                  <th>
                    English
                  </th>
                  <th>
                    Japanese
                  </th>
                </tr>
              </thead>
              <tbody>
                {list}
              </tbody>
            </Table>
        </CardBody>
    </Card>
  )
}

export default VocabList;
