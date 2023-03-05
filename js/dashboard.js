
var options = {
    chart: {
      type: 'bar',
      foreColor: 'white',

      fill:{
       
      },
      height: '450px',
      toolbar:{
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        distributed: true,

      }
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125],
      
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    },
    colors: [ // this array contains different color code for each data
    "#33b2df",
    "#546E7A",
    "#d4526e",
    "#13d8aa",
    "#A5978B",
    "#2b908f",
    "#f9a3a4",
    "#90ee7e",
    "#f48024",
    "#69d2e7"
],
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();

  var options = {
    chart: {
      foreColor: 'white',
      type: 'line',
      height: '450px'
      ,
      toolbar:{
        show: false
      }
    },
    
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chartTwo"), options);
  
  chart.render();



  let sidebar = document.getElementById("sidebarDiv");
  let button = document.getElementById("hamburger");

  button.addEventListener("click",()=>{
    console.log("good click!")
    // console.log(window.getComputedStyle(sidebar).display)
    if(window.getComputedStyle(sidebar).visibility === "hidden"){
        sidebar.style.visibility = "visible"
    }else if(window.getComputedStyle(sidebar).visibility === "visible"){
      sidebar.style.visibility = "hidden"
    }
    
  })

  let open = ()=>{

  }
  

  

 





  // button.addEventListener("click",()=>{
  //   console.log("good click!")
  //   // console.log(window.getComputedStyle(sidebar).display)
  //   if(window.getComputedStyle(sidebar).display == "none"){
  //       sidebar.style.display = "block"
  //   }else if(window.getComputedStyle(sidebar).display == "block"){
  //     sidebar.style.display = "none"
  //   }
    
  // })


