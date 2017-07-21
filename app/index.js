import React from 'react';
import {render} from 'react-dom';
import routes from "./config/routes";
import { browserHistory } from 'react-router';


render(
	routes ,
	document.getElementById('react-container')
);
