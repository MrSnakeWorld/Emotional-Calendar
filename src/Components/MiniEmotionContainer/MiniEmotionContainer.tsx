import React from 'react'
import MiniEmotion from './MiniEmotion/MiniEmotion'
import classes from './MiniEmotionContainer.module.css'

function MiniEmotionContainer() {
  return (
    <div className={classes.container}>
      <table className={classes.table}>
        <tr>
          <td><MiniEmotion active={true} R={0} G={255} B={127} >1</MiniEmotion></td>
          <td><MiniEmotion active={true} R={0} G={255} B={127} >2</MiniEmotion></td>
          <td><MiniEmotion active={true} R={248} G={23} B={62} bright='100%' >3</MiniEmotion></td>
          <td><MiniEmotion active={true} R={248} G={23} B={62} bright='100%' >4</MiniEmotion></td>
          <td><MiniEmotion active={true} R={248} G={23} B={62} bright='100%' >5</MiniEmotion></td>
          <td><MiniEmotion holiday={true} R={83} G={75} B={79} bright='80%' >6</MiniEmotion></td>
          <td><MiniEmotion holiday={true} R={49} G={127} B={67} >7</MiniEmotion></td>
        </tr>
        <tr>
          <td><MiniEmotion active={true} R={42} G={82} B={190} >8</MiniEmotion></td>
          <td><MiniEmotion active={true} R={42} G={82} B={190} >9</MiniEmotion></td>
          <td><MiniEmotion active={true} R={42} G={82} B={190} >10</MiniEmotion></td>
          <td><MiniEmotion active={true} R={42} G={82} B={190} >11</MiniEmotion></td>
          <td><MiniEmotion active={true} R={42} G={82} B={190} >12</MiniEmotion></td>
          <td><MiniEmotion holiday={true} color='yellow' >13</MiniEmotion></td>
          <td><MiniEmotion holiday={true} >14</MiniEmotion></td>
        </tr>
        <tr>
          <td><MiniEmotion active={true} >15</MiniEmotion></td>
          <td><MiniEmotion active={true} >16</MiniEmotion></td>
          <td><MiniEmotion active={true} >17</MiniEmotion></td>
          <td><MiniEmotion active={true} >18</MiniEmotion></td>
          <td><MiniEmotion active={true} >19</MiniEmotion></td>
          <td><MiniEmotion holiday={true} >20</MiniEmotion></td>
          <td><MiniEmotion holiday={true} >21</MiniEmotion></td>
        </tr>
        <tr>
          <td><MiniEmotion active={true} >22</MiniEmotion></td>
          <td><MiniEmotion active={true} >23</MiniEmotion></td>
          <td><MiniEmotion active={true} >24</MiniEmotion></td>
          <td><MiniEmotion active={true} >25</MiniEmotion></td>
          <td><MiniEmotion active={true} >26</MiniEmotion></td>
          <td><MiniEmotion holiday={true} >27</MiniEmotion></td>
          <td><MiniEmotion holiday={true} >28</MiniEmotion></td>
        </tr>
        <tr>
          <td><MiniEmotion active={true} >29</MiniEmotion></td>
          <td><MiniEmotion active={true} >30</MiniEmotion></td>
          <td><MiniEmotion active={false} >1</MiniEmotion></td>
          <td><MiniEmotion active={false} >2</MiniEmotion></td>
          <td><MiniEmotion active={false} >3</MiniEmotion></td>
          <td><MiniEmotion active={false} >4</MiniEmotion></td>
          <td><MiniEmotion active={false} >5</MiniEmotion></td>
        </tr>

      </table>
    </div>
  )
}

export default MiniEmotionContainer
