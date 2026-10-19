const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigation');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open')}));
const filters=[...document.querySelectorAll('.filter')];
filters.forEach(button=>button.addEventListener('click',()=>{filters.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));let count=0;document.querySelectorAll('.evidence article').forEach(row=>{row.hidden=button.dataset.filter!=='all'&&row.dataset.category!==button.dataset.filter;if(!row.hidden)count++});document.querySelector('#filter-status').textContent=count+' Kompetenzfelder angezeigt.'}));
const tabs=[...document.querySelectorAll('.journey-tab')];
function selectTab(tab){tabs.forEach(t=>{const selected=t===tab;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!selected})}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectTab(tab));tab.addEventListener('keydown',e=>{let target;if(e.key==='ArrowRight')target=tabs[(index+1)%tabs.length];if(e.key==='ArrowLeft')target=tabs[(index+tabs.length-1)%tabs.length];if(e.key==='Home')target=tabs[0];if(e.key==='End')target=tabs[tabs.length-1];if(target){e.preventDefault();selectTab(target);target.focus()}})});
const workTabs=[...document.querySelectorAll('.work-tab')];
function selectWork(tab){workTabs.forEach(t=>{const selected=t===tab;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!selected})}
workTabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectWork(tab));tab.addEventListener('keydown',e=>{let target;if(e.key==='ArrowRight')target=workTabs[(index+1)%workTabs.length];if(e.key==='ArrowLeft')target=workTabs[(index+workTabs.length-1)%workTabs.length];if(e.key==='Home')target=workTabs[0];if(e.key==='End')target=workTabs[workTabs.length-1];if(target){e.preventDefault();selectWork(target);target.focus()}})});
