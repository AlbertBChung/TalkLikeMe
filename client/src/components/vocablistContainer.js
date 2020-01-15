import React from 'react';
import VocabList from './vocablist'
import { Table } from 'reactstrap';
import { Backpack, Cat, SpeechBubble} from 'react-kawaii'

function VocabListContainer(props) {
  return (
    <Table responsive>
      <tbody>
        <tr>
            <td>
              <VocabList
                title="Nouns"
                words={[3,3]}
                mascot={<Backpack size={100} mood="happy" color="#FFD882" />}
              />
            </td>
            <td>
              <VocabList
                title="Verbs"
                words={[3,3]}
                mascot={<Cat size={100} mood="happy" color="#596881" />}
              />
            </td>
            <td>
              <VocabList
                title="Adjectives"
                words={[3,3]}
                mascot={<SpeechBubble size={100} mood="happy" color="#83D1FB" />}
              />
            </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default VocabListContainer;
