var container   = document.querySelector('.container')
var show_grid_button = document.querySelector('.btn-show-grid')
var hide_grid_button = document.querySelector('.btn-hide-grid')

console.log("container:",container)
console.log("show_grid_button:",show_grid_button)
console.log("hide_grid_button:",hide_grid_button)

show_grid_button.onclick=function(){
  console.log('clicked show grid button')
  var pre_assigned_class = container.getAttribute('class')
  console.log(pre_assigned_class)
  container.setAttribute('class',pre_assigned_class+' show-grid')
}
hide_grid_button.onclick=function(){
  console.log('clicked hide grid button')
  var pre_assigned_class = container.getAttribute('class')
  console.log(pre_assigned_class)
  container.setAttribute('class',pre_assigned_class.replace(' show-grid',''))
}
