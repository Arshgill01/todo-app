import { useState } from "react";

export function Tabs(props) {
  const {todos, selectedTab, setSelectedTab} = props;

  const tabs = ['All', 'Open', 'Completed'];

  
  return <nav>
    {tabs.map((tab, tabIndex)=>{

      const numOfTasks =  tab === 'All'? todos.length: 
      tab === "Completed"? todos.filter(val => val.complete).length:
      todos.filter(val=> !val.complete).length


      return <button key={tabIndex} className={"tab-button " + (tab === selectedTab ? 'tab-selected': " " )} onClick={()=>{
        setSelectedTab(tab);
      }} >
        
        <h4>{tab}<span>({numOfTasks})</span></h4>
      
      
      </button>
    })}
    <hr></hr>
  </nav>;
}