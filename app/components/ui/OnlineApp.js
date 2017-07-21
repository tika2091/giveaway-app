import React from 'react';
import Count from './Count';
import OnlineCount from '/OnlineCount';

export deafult class OnlineApp extends Component {
  render: function(){
    return(
      <div className="row content">
        <li className="item">
            <a href="#" className="title">Online counter</a>
            <p>Counters display number of visitors on the page at this moment.</p>
            <Count isOnlineCounter={true}
                  counterText="views"
                  firebaseHost="https://counter-button.firebaseio.com/"
                  firebaseResourceId='online-counter'/>
            <div className="post">
              <pre className="brush: html">
                &lt;Count isOnlineCounter=&#123;true&#125; counterText=&quot;views&quot; firebaseHost=&quot;https://counter-button.firebaseio.com/&quot;/ firebaseResourceId=&#39;online-counter&#39;&gt;
              </pre>
            </div>
          </li>
      </div>
    )
  }
}
  React.render(
    <OnlineApp />,
    document.getElementById('OnlineApp')
  )
