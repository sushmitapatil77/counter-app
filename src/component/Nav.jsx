import React, { Component } from 'react';

const Nav = ({counter}) => {
 return ( 
  <nav class="navbar navbar-light bg-light">
 <p className="badge">{counter.filter(c => c.value > 0).length}</p>
</nav>
  );
}
 
export default Nav;