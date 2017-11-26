import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

	function menu(){
		let type= <div className='body'>
			<div className='title2'>
			CONTENTS
			</div>
			<div className='contents'>
					<button>Myth 1</button><br/>
					<button>Myth 2</button><br/>
					<button>Myth 3</button><br/>
					<button>Myth 4</button><br/>
					<button>Myth 5</button><br/>
					<button>Myth 6</button><br/>
					<button>Myth 7</button><br/>
					<button>Myth 8</button><br/>
					<button>Myth 9</button><br/>
					<button>Myth 10</button><br/>
					<button>Myth 11</button><br/>
					<button>Myth 12</button><br/>
					<button>Myth 13</button><br/>
					<button>Myth 14</button><br/>
					<button>Myth 15</button><br/>
					<button>Myth 16</button><br/>
					<button>Myth 17</button><br/>
					<button>Myth 18</button><br/>
					<button>Myth 19</button><br/>
					<button>Myth 20</button><br/>
					<button>Myth 21</button><br/>
					<button>Myth 22</button><br/>
					<button>Myth 23</button><br/>
					<button>Myth 24</button><br/>
					<button>Myth 25</button><br/>
				</div>
			</div>

		ReactDOM.render(type, document.getElementById('root'));		
	}

	let type = <div className='body'>
					<div className='title'>
					<br/><br/>
					The WORLD OF MYTH!
					</div>
					<button className='buttonstyle1' onClick={menu}>Start!</button>
				</div>

	ReactDOM.render(type, document.getElementById('root'));
