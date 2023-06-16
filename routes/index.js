var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', {});
  res.send
  (`

  <html>

  <head>
    <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
  <style>

  #airplane-outline path:hover {
    stroke : #D7FBCF;
  }

  #menu-outline path:hover {
    stroke : black;
  }

  #briefcase-outline-2 path:hover, #briefcase-outline-2 rect:hover {
    stroke : #EFE3CC;
  }

  #planet-outline-2 path:hover, #planet-outline-2 circle:hover {
    stroke : #E4C7F5;
  }

  .hover {
    stroke:aquamarine;
  }

  </style>
  </head>
  <body>


  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1366" height="2901" viewBox="0 0 1366 2901" style="width:100%;height:auto;" >
  <defs>
    <clipPath id="clip-pw.home">
      <rect width="1366" height="2901"/>
    </clipPath>
  </defs>
  <g id="pw.home" clip-path="url(#clip-pw.home)">
    <rect width="1366" height="2901" fill="#fff"/>
    <g id="person-circle-outline" transform="translate(-188.277 353.893)">
      <g id="person-circle-outline-2" data-name="person-circle-outline" transform="translate(803.683 -67.814) rotate(43)" opacity="0.32">
        <path id="Path_3" data-name="Path 3" d="M647.166,48.036C314.846,43.547,43.547,314.846,48.036,647.166c4.432,318.712,263.941,578.222,582.654,582.654,332.377,4.545,603.619-266.754,599.074-599.074C1225.388,311.977,965.879,52.467,647.166,48.036ZM1006.3,977.7a11.363,11.363,0,0,1-17.443-.909,353.035,353.035,0,0,0-91.9-84.06c-72.327-46.419-163.973-71.987-258.032-71.987s-185.7,25.567-258.032,71.987a352.943,352.943,0,0,0-91.9,84.032,11.363,11.363,0,0,1-17.443.909A498.054,498.054,0,0,1,138.942,647.45c-4.631-276.441,222.209-507.826,498.764-508.508s501.207,223.886,501.207,499.986A498.052,498.052,0,0,1,1006.3,977.7Z" transform="translate(0 0)" fill="#b7b4b4"/>
      </g>
    </g>
    <a href="/menu" ><g id="menu-outline" transform="translate(101.5 108.5)">
      <path id="menu-outline-2" data-name="menu-outline" d="M80,160H432M80,256H432M80,352H432" transform="translate(-80 -160)" fill="none" stroke="#e9e5e5" stroke-linecap="round" stroke-miterlimit="10" stroke-width="43"/>
    </g></a>
    <g id="people-outline" transform="translate(82.013 2383)">
      <path id="Path_16" data-name="Path 16" d="M433.871,185.356c-3.636,50.474-41.079,89.356-81.91,89.356s-78.336-38.87-81.91-89.356C266.328,132.847,302.778,96,351.961,96S437.594,133.8,433.871,185.356Z" transform="translate(57.324)" fill="none" stroke="#afafaf" stroke-linecap="round" stroke-linejoin="round" stroke-width="23"/>
      <path id="Path_17" data-name="Path 17" d="M370.712,304c-80.88,0-158.657,40.173-178.142,118.41C189.989,432.76,196.479,443,207.115,443H534.321c10.636,0,17.089-10.239,14.545-20.589C529.381,342.92,451.6,304,370.712,304Z" transform="translate(38.573 50.141)" fill="none" stroke="#afafaf" stroke-miterlimit="10" stroke-width="23"/>
      <path id="Path_18" data-name="Path 18" d="M225.592,199.907c-2.9,40.31-33.161,72.056-65.776,72.056S96.894,240.229,94.04,199.907C91.074,157.972,120.524,128,159.816,128S228.559,158.741,225.592,199.907Z" transform="translate(14.908 7.714)" fill="none" stroke="#afafaf" stroke-linecap="round" stroke-linejoin="round" stroke-width="23"/>
      <path id="Path_19" data-name="Path 19" d="M247.947,308.76c-22.4-10.264-47.073-14.21-73.223-14.21-64.535,0-126.712,32.081-142.288,94.569-2.048,8.265,3.14,16.444,11.629,16.444H183.412" transform="translate(0 47.863)" fill="none" stroke="#afafaf" stroke-linecap="round" stroke-miterlimit="10" stroke-width="23"/>
    </g>
    <line id="Line_1" data-name="Line 1" x2="724" transform="translate(639.5 2617.5)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="25"/>
   <a href="/exp"> <g id="briefcase-outline" transform="translate(1097.759 271.333)">
      <g id="briefcase-outline-2" data-name="briefcase-outline" transform="translate(89.453 235.532) rotate(-143)">
        <rect id="Rectangle_94" class="briefcase" data-name="Rectangle 94" width="128" height="92" rx="10" transform="translate(32 82.173)" fill="none" stroke="#e9e5e5" stroke-linejoin="round" stroke-width="11"/>
        <path id="Path_281" class="briefcase" data-name="Path 281" d="M64.059,82.319V73.16A9.16,9.16,0,0,1,73.218,64h45.8a9.16,9.16,0,0,1,9.16,9.16v9.16m32.059,32.059H32m82.436,0v6.87a2.29,2.29,0,0,1-2.29,2.29H80.088a2.29,2.29,0,0,1-2.29-2.29v-6.87" fill="none" stroke="#e9e5e5" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/>
      </g>
    </g> </a>
    <a href="/person"><g id="accessibility-outline" transform="translate(692.6 300.5)">
      <g id="accessibility-outline-2" data-name="accessibility-outline" transform="translate(-63.953 -16)" opacity="0.94">
        <circle id="Ellipse_1" class="accessibility" data-name="Ellipse 1" cx="40.042" cy="40.042" r="40.042" transform="translate(216.158 16)" fill="#fff" stroke="#d0cbcb" stroke-linejoin="round" stroke-width="19"/>
        <path id="Path_10" class="accessibility" data-name="Path 10" d="M204.376,274.593c2.9-18.079,4.2-35.557-.5-47.64-4-10.391-12.713-16.207-23.224-20.171L88.025,176.811c-12.013-4-23.234-10.711-24.025-23.965-1-17.018,14.015-28.029,29.03-24.025,0,0,88.092,31.172,163.17,31.172s162.169-31.032,162.169-31.032c18.019-5.005,30.031,9.009,30.031,23.815,0,14.225-11.011,19.23-24.025,23.965l-88.092,31.943c-8.008,3-21.022,9.009-26.027,18.2-6.006,10.761-5.005,29.561-2.1,47.64l5.906,29.661,37.449,164.071c2.8,13.164-6.307,25.466-19.42,27.769s-23.835-6.647-27.719-19.38l-37.6-116.051q-2.713-8.349-4.8-16.888L256.2,320.2l-5.306,21.673q-2.523,10.361-5.806,20.5L208.15,476.543c-4,12.863-14.515,21.773-27.629,19.48s-22.423-15.606-19.48-27.769l37.429-164Z" transform="translate(0 0.117)" fill="#fff" stroke="#d0cbcb" stroke-linejoin="round" stroke-width="19"/>
      </g>
    </g></a>
    <g id="Group_307" data-name="Group 307">
      <circle id="Ellipse_18" data-name="Ellipse 18" cx="172" cy="172" r="172" transform="translate(552 936)" fill="#fff"/>
      <g id="planet-outline" transform="translate(487.993 944)">
        <g id="planet-outline-2" stroke=blue data-name="planet-outline" transform="translate(-15.997 -96)">
          <circle id="Ellipse_2" class="planet" data-name="Ellipse 2" cx="160" cy="160" r="160" transform="translate(96 96)" fill="rgba(141,28,28,0)" stroke="#e9e5e5" stroke-miterlimit="10" stroke-width="32"/>
          <path id="Path_13" class="planet" data-name="Path 13" d="M413.48,284.46c58.87,47.24,91.61,89,80.31,108.55-17.85,30.85-138.78-5.48-270.1-81.15S.37,149.84,18.21,119c11.16-19.28,62.58-12.32,131.64,14.09" fill="rgba(141,28,28,0)" stroke="#e9e5e5" stroke-miterlimit="10" stroke-width="32"/>
        </g>
      </g>
    </g>
    <a href="/travel"><g id="airplane-outline" transform="translate(271.5 1556.5)">
      <path id="airplane-outline-2" data-name="airplane-outline" d="M611.98,310.983c-5.248,0-22.831.154-27.786.463l-100.183,2.624a2.825,2.825,0,0,1-2.609-1.389L281.377,69.5A13.893,13.893,0,0,0,271.1,64H229.588L342.274,312.527a3.628,3.628,0,0,1-3.489,5.171l-187.846,2.779a12.442,12.442,0,0,1-10.188-4.785L83.636,246.227c-4.631-6.02-13.306-9.262-20.855-9.262H33.669c-1.991,0-1.7,1.868-1.158,3.751L63.137,350.964a25.162,25.162,0,0,1,0,18.369L32.48,479.241c-.911,3.01-.8,4.631,2.732,4.631H62.874c12.565,0,14.279-1.636,20.7-9.725l58.2-70.545a12.643,12.643,0,0,1,10.188-4.785l186.287,4.168A4.168,4.168,0,0,1,342,408.758l-112.408,248h41.123a13.893,13.893,0,0,0,10.265-5.48L481.419,408.233c.6-.926,3.087-1.389,4.152-1.389l98.639,2.624c5.094.309,22.522.463,27.786.463,68.337,0,111.559-18.786,111.559-49.551S680.518,310.983,611.98,310.983Z" transform="translate(-31.997 -64)" fill="#fff" stroke="rgba(223,223,223,0.69)" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
    </g></a>
    <a href="chat"><g id="Component_12_1" data-name="Component 12 – 1" transform="translate(617 2259)">
      <g id="Group_308" data-name="Group 308" transform="translate(-848 -2064.074)">
        <g id="Rectangle_95" class="chat" data-name="Rectangle 95" transform="translate(848 2064.074)" fill="#fff" stroke="#e6e6e6" stroke-width="20">
          <rect width="416" height="172" rx="57" stroke="none"/>
          <rect x="10" y="10" width="396" height="152" rx="47" fill="none"/>
        </g>
      </g>
      <g id="Group_332" data-name="Group 332" transform="translate(-828 -1891)">
        <g id="Rectangle_95-2" class="chat" data-name="Rectangle 95" transform="translate(848 2064)" fill="#fff" stroke="#e6e6e6" stroke-width="16">
          <rect width="208" height="56" rx="28" stroke="none"/>
          <rect x="8" y="8" width="192" height="40" rx="20" fill="none"/>
        </g>
      </g>
      <g id="Group_333" data-name="Group 333" transform="translate(-828 -1831)">
        <g id="Rectangle_95-3" class="chat" data-name="Rectangle 95" transform="translate(848 2064)" fill="#fff" stroke="#e6e6e6" stroke-width="16">
          <rect width="137" height="37" rx="18.5" stroke="none"/>
          <rect x="8" y="8" width="121" height="21" rx="10.5" fill="none"/>
        </g>
      </g>
      </a>
    </g>
  </g>
</svg>

<script>

/* BREIFCASE */
document.getElementById("briefcase-outline").addEventListener('mouseover', function(){
  $('.briefcase').css("stroke", "#EFE3CC")
})


document.getElementById("briefcase-outline").addEventListener('mouseout', function(){
  $('.briefcase').css("stroke", "#e9e5e5")
})

/* PLANET */
document.getElementById("planet-outline").addEventListener('mouseover', function(){
  $('.planet').css("stroke", "#E4C7F5")
})


document.getElementById("planet-outline").addEventListener('mouseout', function(){
  $('.planet').css("stroke", "#e9e5e5")
})


/* ACCESSIBILITY */
document.getElementById("accessibility-outline").addEventListener('mouseover', function(){
  $('.accessibility').css("stroke", "#CDF9FB")
})


document.getElementById("accessibility-outline").addEventListener('mouseout', function(){
  $('.accessibility').css("stroke", "#e9e5e5")
})


/* CHAT */
document.getElementById("Component_12_1").addEventListener('mouseover', function(){
  $('.chat').css("stroke", "#FBB4B4")
})


document.getElementById("Component_12_1").addEventListener('mouseout', function(){
  $('.chat').css("stroke", "#e9e5e5")
})
</script>



</body>

</html>

  `)
});

router.get('/menu', function(req, res, next) {
  // res.render('index', {});
  res.send
  (`

  <html>

  <head>
  <style>


  .close-outline:hover {
    stroke : black;
  }



  .svg {
    width:100%;
    height:auto;
  }


  </style>
  </head>
  <body>
  <svg class="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1366" height="2901" viewBox="0 0 1366 2901" >
  <defs>
    <clipPath id="clip-pw.menu">
      <rect width="1366" height="2901"/>
    </clipPath>
  </defs>
  <g id="pw.menu" clip-path="url(#clip-pw.menu)">
    <rect width="1366" height="2901" fill="#fff"/>
    <g id="bonfire-outline" transform="translate(753.27 249.801) rotate(180)">
      <path id="Path_20" data-name="Path 20" d="M75.038,10.1a5.72,5.72,0,0,0-5.767-5.111,5.791,5.791,0,0,0-5.658,4.386L57.955,36.85a11.113,11.113,0,0,0-.289,2.45c0,6.2,5.185,10.5,11.6,10.5S80.879,45.5,80.879,39.3a11.24,11.24,0,0,0-.4-2.938Zm42.8,12.289a12.984,12.984,0,0,0-1.85-1.352L94.371,5.931c-2.1-1.321-4.352-1.284-5.984.311a4.206,4.206,0,0,0-.622,5.347l16.321,21.45a11.365,11.365,0,0,0,1.243,1.458c2.829,3.162,9.1,3.336,12.55,0C121.28,31.106,121.239,25.062,117.835,22.389ZM134.078.012H112.187a2.662,2.662,0,0,0-2.761,2.537A2.894,2.894,0,0,0,111.577,5.4l20.651,6.388c3,.7,7.041-1.974,7.041-5.313C139.27,2.226,136.907.012,134.078.012ZM29.912,2.537A2.718,2.718,0,0,0,26.974,0H5.083C2.325,0,0,2.978,0,6.317s3.923,6.168,6.932,5.468L27.894,5.4A2.63,2.63,0,0,0,29.912,2.537Zm15.024,3.42L23.315,21a10.054,10.054,0,0,0-1.865,1.352,8.185,8.185,0,0,0,0,11.987,9.137,9.137,0,0,0,12.547,0,9.561,9.561,0,0,0,1.243-1.455L51.573,11.552a4.1,4.1,0,0,0-.622-5.3,4.663,4.663,0,0,0-6.015-.292Z" fill="#d2d2d2"/>
    </g>
    <a href="/"> <path id="close-outline" class="close-outline" d="M340,340,144,144m196,0L144,340" transform="translate(5.5 -62.5)" fill="none" stroke="#e9e9e9" stroke-linecap="round" stroke-linejoin="round" stroke-width="45"/> </a>
    <g id="home-outline" transform="translate(460 480.546)" opacity="0.55">
      <path id="Path_5" data-name="Path 5" d="M80,212V448a16,16,0,0,0,16,16h96V328a24,24,0,0,1,24-24h80a24,24,0,0,1,24,24V464h96a16,16,0,0,0,16-16V212" transform="translate(-32 -48.017)" fill="none" stroke="#d2d2d2" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
      <path id="Path_6" data-name="Path 6" d="M480,256,266.89,52c-5-5.28-16.69-5.34-21.78,0L32,256m368-77V64H352v69" transform="translate(-32 -48.017)" fill="none" stroke="#d2d2d2" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
    </g>
    <a href="/"> <path id="close-outline-2" class="close-outline" data-name="close-outline" d="M340,340,144,144m196,0L144,340" transform="translate(877.5 -62.5)" fill="none" stroke="#e9e9e9" stroke-linecap="round" stroke-linejoin="round" stroke-width="45"/> </a>
    <g id="walk-outline" transform="translate(199 1601)" opacity="0.73">
      <path id="Path_285" data-name="Path 285" d="M208.162,289.748l-24.456-49.43-19.339-24.724A31.371,31.371,0,0,1,160,199.633V144h6.751a17.327,17.327,0,0,1,17.331,17.327v78.991M127.9,208.211v-32.1S143.952,144,160,144m72.236,56.185L203.764,181.48m-57.5,106.563L169.3,254.285" transform="translate(-127.9 -95.845)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
      <ellipse id="Ellipse_19" data-name="Ellipse 19" cx="16.052" cy="16.052" rx="16.052" ry="16.052" transform="translate(40.133 0)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
    </g>
    <g id="walk-outline-2" data-name="walk-outline" transform="translate(296.043 1601)" opacity="0.73">
      <path id="Path_285-2" data-name="Path 285" d="M151.977,289.748l24.456-49.43,19.339-24.724a31.371,31.371,0,0,0,4.364-15.961V144h-6.751a17.327,17.327,0,0,0-17.331,17.327v78.991m56.185-32.108v-32.1S216.188,144,200.136,144M127.9,200.185l28.476-18.705m57.5,106.563L190.84,254.285" transform="translate(-127.9 -95.845)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
      <ellipse id="Ellipse_19-2" data-name="Ellipse 19" cx="16.052" cy="16.052" rx="16.052" ry="16.052" transform="translate(32.103 0)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
    </g>
    <g id="Group_309" data-name="Group 309" transform="translate(782.109 1601)" opacity="0.73">
      <g id="walk-outline-3" data-name="walk-outline" transform="translate(0 0)">
        <path id="Path_285-3" data-name="Path 285" d="M208.162,289.748l-24.456-49.43-19.339-24.724A31.371,31.371,0,0,1,160,199.633V144h6.751a17.327,17.327,0,0,1,17.331,17.327v78.991M127.9,208.211v-32.1S143.952,144,160,144m72.236,56.185L203.764,181.48m-57.5,106.563L169.3,254.285" transform="translate(-127.9 -95.845)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
        <ellipse id="Ellipse_19-3" data-name="Ellipse 19" cx="16.052" cy="16.052" rx="16.052" ry="16.052" transform="translate(40.133 0)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
      </g>
      <g id="walk-outline-4" data-name="walk-outline" transform="translate(97.043 0)">
        <path id="Path_285-4" data-name="Path 285" d="M151.977,289.748l24.456-49.43,19.339-24.724a31.371,31.371,0,0,0,4.364-15.961V144h-6.751a17.327,17.327,0,0,0-17.331,17.327v78.991m56.185-32.108v-32.1S216.188,144,200.136,144M127.9,200.185l28.476-18.705m57.5,106.563L190.84,254.285" transform="translate(-127.9 -95.845)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
        <ellipse id="Ellipse_19-4" data-name="Ellipse 19" cx="16.052" cy="16.052" rx="16.052" ry="16.052" transform="translate(32.103 0)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
      </g>
    </g>
    <g id="Group_310" data-name="Group 310" transform="translate(1070.617 1416)" opacity="0.73">
      <g id="walk-outline-5" data-name="walk-outline" transform="translate(0 0)">
        <path id="Path_285-5" data-name="Path 285" d="M208.162,289.748l-24.456-49.43-19.339-24.724A31.371,31.371,0,0,1,160,199.633V144h6.751a17.327,17.327,0,0,1,17.331,17.327v78.991M127.9,208.211v-32.1S143.952,144,160,144m72.236,56.185L203.764,181.48m-57.5,106.563L169.3,254.285" transform="translate(-127.9 -95.845)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
        <ellipse id="Ellipse_19-5" data-name="Ellipse 19" cx="16.052" cy="16.052" rx="16.052" ry="16.052" transform="translate(40.133 0)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
      </g>
      <g id="walk-outline-6" data-name="walk-outline" transform="translate(97.043 0)">
        <path id="Path_285-6" data-name="Path 285" d="M151.977,289.748l24.456-49.43,19.339-24.724a31.371,31.371,0,0,0,4.364-15.961V144h-6.751a17.327,17.327,0,0,0-17.331,17.327v78.991m56.185-32.108v-32.1S216.188,144,200.136,144M127.9,200.185l28.476-18.705m57.5,106.563L190.84,254.285" transform="translate(-127.9 -95.845)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
        <ellipse id="Ellipse_19-6" data-name="Ellipse 19" cx="16.052" cy="16.052" rx="16.052" ry="16.052" transform="translate(32.103 0)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
      </g>
    </g>
    <g id="Group_311" data-name="Group 311" transform="translate(1094.617 1822.097)" opacity="0.73">
      <g id="walk-outline-7" data-name="walk-outline" transform="translate(0 0)">
        <path id="Path_285-7" data-name="Path 285" d="M208.162,289.748l-24.456-49.43-19.339-24.724A31.371,31.371,0,0,1,160,199.633V144h6.751a17.327,17.327,0,0,1,17.331,17.327v78.991M127.9,208.211v-32.1S143.952,144,160,144m72.236,56.185L203.764,181.48m-57.5,106.563L169.3,254.285" transform="translate(-127.9 -95.845)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
        <ellipse id="Ellipse_19-7" data-name="Ellipse 19" cx="16.052" cy="16.052" rx="16.052" ry="16.052" transform="translate(40.133 0)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
      </g>
      <g id="walk-outline-8" data-name="walk-outline" transform="translate(97.043 0)">
        <path id="Path_285-8" data-name="Path 285" d="M151.977,289.748l24.456-49.43,19.339-24.724a31.371,31.371,0,0,0,4.364-15.961V144h-6.751a17.327,17.327,0,0,0-17.331,17.327v78.991m56.185-32.108v-32.1S216.188,144,200.136,144M127.9,200.185l28.476-18.705m57.5,106.563L190.84,254.285" transform="translate(-127.9 -95.845)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
        <ellipse id="Ellipse_19-8" data-name="Ellipse 19" cx="16.052" cy="16.052" rx="16.052" ry="16.052" transform="translate(32.103 0)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
      </g>
    </g>
    <g id="Group_312" data-name="Group 312" transform="translate(408 1422.097)" opacity="0.73">
      <g id="walk-outline-9" data-name="walk-outline" transform="translate(0 0)">
        <path id="Path_285-9" data-name="Path 285" d="M208.162,289.748l-24.456-49.43-19.339-24.724A31.371,31.371,0,0,1,160,199.633V144h6.751a17.327,17.327,0,0,1,17.331,17.327v78.991M127.9,208.211v-32.1S143.952,144,160,144m72.236,56.185L203.764,181.48m-57.5,106.563L169.3,254.285" transform="translate(-127.9 -95.845)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
        <ellipse id="Ellipse_19-9" data-name="Ellipse 19" cx="16.052" cy="16.052" rx="16.052" ry="16.052" transform="translate(40.133 0)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
      </g>
      <g id="walk-outline-10" data-name="walk-outline" transform="translate(97.043 0)">
        <path id="Path_285-10" data-name="Path 285" d="M151.977,289.748l24.456-49.43,19.339-24.724a31.371,31.371,0,0,0,4.364-15.961V144h-6.751a17.327,17.327,0,0,0-17.331,17.327v78.991m56.185-32.108v-32.1S216.188,144,200.136,144M127.9,200.185l28.476-18.705m57.5,106.563L190.84,254.285" transform="translate(-127.9 -95.845)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
        <ellipse id="Ellipse_19-10" data-name="Ellipse 19" cx="16.052" cy="16.052" rx="16.052" ry="16.052" transform="translate(32.103 0)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
      </g>
    </g>
    <g id="Group_313" data-name="Group 313" transform="translate(40 1822.097)" opacity="0.73">
      <g id="walk-outline-11" data-name="walk-outline" transform="translate(0 0)">
        <path id="Path_285-11" data-name="Path 285" d="M208.162,289.748l-24.456-49.43-19.339-24.724A31.371,31.371,0,0,1,160,199.633V144h6.751a17.327,17.327,0,0,1,17.331,17.327v78.991M127.9,208.211v-32.1S143.952,144,160,144m72.236,56.185L203.764,181.48m-57.5,106.563L169.3,254.285" transform="translate(-127.9 -95.845)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
        <ellipse id="Ellipse_19-11" data-name="Ellipse 19" cx="16.052" cy="16.052" rx="16.052" ry="16.052" transform="translate(40.133 0)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
      </g>
      <g id="walk-outline-12" data-name="walk-outline" transform="translate(97.043 0)">
        <path id="Path_285-12" data-name="Path 285" d="M151.977,289.748l24.456-49.43,19.339-24.724a31.371,31.371,0,0,0,4.364-15.961V144h-6.751a17.327,17.327,0,0,0-17.331,17.327v78.991m56.185-32.108v-32.1S216.188,144,200.136,144M127.9,200.185l28.476-18.705m57.5,106.563L190.84,254.285" transform="translate(-127.9 -95.845)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
        <ellipse id="Ellipse_19-12" data-name="Ellipse 19" cx="16.052" cy="16.052" rx="16.052" ry="16.052" transform="translate(32.103 0)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
      </g>
    </g>
    <g id="Group_315" data-name="Group 315">
      <g id="git-commit-outline" transform="translate(427 2378.637) scale(1 0.375)" opacity="0.73">
        <circle id="Ellipse_20" data-name="Ellipse 20" cx="96" cy="96" r="96" transform="translate(160 160)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
        <path id="Path_288" data-name="Path 288" d="M160,256H48m416,0H352" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
      </g>
      <g id="git-merge-outline" transform="translate(159 2052)" opacity="0.73">
        <circle id="Ellipse_21" data-name="Ellipse 21" cx="48" cy="48" r="48" transform="translate(81 48)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="25"/>
        <circle id="Ellipse_22" data-name="Ellipse 22" cx="48" cy="48" r="48" transform="translate(81 368)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="25"/>
        <path id="Path_289" data-name="Path 289" d="M129,144V368" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="25"/>
        <circle id="Ellipse_23" data-name="Ellipse 23" cx="48" cy="48" r="48" transform="translate(337 240)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="25"/>
        <path id="Path_290" data-name="Path 290" d="M129,144c0,96,112,144,208,144" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="25"/>
      </g>
      <g id="git-merge-outline-2" data-name="git-merge-outline" transform="translate(776 2100)" opacity="0.73">
        <circle id="Ellipse_21-2" data-name="Ellipse 21" cx="48" cy="48" r="48" transform="translate(256)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="25"/>
        <circle id="Ellipse_22-2" data-name="Ellipse 22" cx="48" cy="48" r="48" transform="translate(256 320)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="25"/>
        <path id="Path_289-2" data-name="Path 289" d="M129,144V368" transform="translate(175 -48)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="25"/>
        <circle id="Ellipse_23-2" data-name="Ellipse 23" cx="48" cy="48" r="48" transform="translate(0 192)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="25"/>
        <path id="Path_290-2" data-name="Path 290" d="M337,144c0,96-112,144-208,144" transform="translate(-33 -48)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="25"/>
      </g>
      <g id="git-branch-outline" transform="translate(126 2369)" opacity="0.73">
        <circle id="Ellipse_24" data-name="Ellipse 24" cx="48" cy="48" r="48" transform="translate(112 48)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="25"/>
        <circle id="Ellipse_25" data-name="Ellipse 25" cx="48" cy="48" r="48" transform="translate(112 368)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="25"/>
        <path id="Path_291" data-name="Path 291" d="M160,368V144" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="25"/>
        <circle id="Ellipse_26" data-name="Ellipse 26" cx="48" cy="48" r="48" transform="translate(304 112)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="25"/>
        <path id="Path_292" data-name="Path 292" d="M352,208c0,128-192,48-192,160" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="25"/>
      </g>
      <g id="git-branch-outline-2" data-name="git-branch-outline" transform="translate(840 2417)" opacity="0.73">
        <circle id="Ellipse_24-2" data-name="Ellipse 24" cx="48" cy="48" r="48" transform="translate(192)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="25"/>
        <circle id="Ellipse_25-2" data-name="Ellipse 25" cx="48" cy="48" r="48" transform="translate(192 320)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="25"/>
        <path id="Path_291-2" data-name="Path 291" d="M160,368V144" transform="translate(80 -48)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="25"/>
        <circle id="Ellipse_26-2" data-name="Ellipse 26" cx="48" cy="48" r="48" transform="translate(0 64)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="25"/>
        <path id="Path_292-2" data-name="Path 292" d="M160,208c0,128,192,48,192,160" transform="translate(-112 -48)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="25"/>
      </g>
      <g id="Group_314" data-name="Group 314" transform="translate(0 9)" opacity="0.73">
        <g id="skull-outline" transform="translate(204 2725)">
          <path id="Path_293" data-name="Path 293" d="M97.939,49.114v8.75a5.656,5.656,0,0,1-3.555,5.252l-2.093.837a2.828,2.828,0,0,0-1.723,2.074l-.884,4.431a1.414,1.414,0,0,1-1.389,1.137H73.644a1.414,1.414,0,0,1-1.387-1.137l-.886-4.431a2.828,2.828,0,0,0-1.723-2.072l-2.093-.837A5.656,5.656,0,0,1,64,57.866v-8.9a16.97,16.97,0,1,1,33.939.145Z" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
          <circle id="Ellipse_27" data-name="Ellipse 27" cx="3.5" cy="3.5" r="3.5" transform="translate(70 50)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
          <circle id="Ellipse_28" data-name="Ellipse 28" cx="3.5" cy="3.5" r="3.5" transform="translate(85 50)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
          <path id="Path_294" data-name="Path 294" d="M212.242,336l-1.414,4.242h2.828Zm0,9.9v2.828M208,345.9v2.828m8.485-2.828v2.828" transform="translate(-131.273 -277.132)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
        </g>
        <g id="skull-outline-2" data-name="skull-outline" transform="translate(204 2088.405)">
          <path id="Path_293-2" data-name="Path 293" d="M97.939,49.114v8.75a5.656,5.656,0,0,1-3.555,5.252l-2.093.837a2.828,2.828,0,0,0-1.723,2.074l-.884,4.431a1.414,1.414,0,0,1-1.389,1.137H73.644a1.414,1.414,0,0,1-1.387-1.137l-.886-4.431a2.828,2.828,0,0,0-1.723-2.072l-2.093-.837A5.656,5.656,0,0,1,64,57.866v-8.9a16.97,16.97,0,1,1,33.939.145Z" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
          <circle id="Ellipse_27-2" data-name="Ellipse 27" cx="3.5" cy="3.5" r="3.5" transform="translate(70 50)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
          <circle id="Ellipse_28-2" data-name="Ellipse 28" cx="3.5" cy="3.5" r="3.5" transform="translate(85 50)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
          <path id="Path_294-2" data-name="Path 294" d="M212.242,336l-1.414,4.242h2.828Zm0,9.9v2.828M208,345.9v2.828m8.485-2.828v2.828" transform="translate(-131.273 -277.132)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
        </g>
        <g id="skull-outline-3" data-name="skull-outline" transform="translate(204 2408)">
          <path id="Path_293-3" data-name="Path 293" d="M97.939,49.114v8.75a5.656,5.656,0,0,1-3.555,5.252l-2.093.837a2.828,2.828,0,0,0-1.723,2.074l-.884,4.431a1.414,1.414,0,0,1-1.389,1.137H73.644a1.414,1.414,0,0,1-1.387-1.137l-.886-4.431a2.828,2.828,0,0,0-1.723-2.072l-2.093-.837A5.656,5.656,0,0,1,64,57.866v-8.9a16.97,16.97,0,1,1,33.939.145Z" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
          <circle id="Ellipse_27-3" data-name="Ellipse 27" cx="3.5" cy="3.5" r="3.5" transform="translate(70 50)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
          <circle id="Ellipse_28-3" data-name="Ellipse 28" cx="3.5" cy="3.5" r="3.5" transform="translate(85 50)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
          <path id="Path_294-3" data-name="Path 294" d="M212.242,336l-1.414,4.242h2.828Zm0,9.9v2.828M208,345.9v2.828m8.485-2.828v2.828" transform="translate(-131.273 -277.132)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
        </g>
      </g>
      <g id="skull-outline-4" data-name="skull-outline" transform="translate(1000 2734)" opacity="0.73">
        <path id="Path_293-4" data-name="Path 293" d="M97.939,49.114v8.75a5.656,5.656,0,0,1-3.555,5.252l-2.093.837a2.828,2.828,0,0,0-1.723,2.074l-.884,4.431a1.414,1.414,0,0,1-1.389,1.137H73.644a1.414,1.414,0,0,1-1.387-1.137l-.886-4.431a2.828,2.828,0,0,0-1.723-2.072l-2.093-.837A5.656,5.656,0,0,1,64,57.866v-8.9a16.97,16.97,0,1,1,33.939.145Z" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <circle id="Ellipse_27-4" data-name="Ellipse 27" cx="3.5" cy="3.5" r="3.5" transform="translate(70 50)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <circle id="Ellipse_28-4" data-name="Ellipse 28" cx="3.5" cy="3.5" r="3.5" transform="translate(85 50)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <path id="Path_294-4" data-name="Path 294" d="M212.242,336l-1.414,4.242h2.828Zm0,9.9v2.828M208,345.9v2.828m8.485-2.828v2.828" transform="translate(-131.273 -277.132)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      </g>
      <g id="skull-outline-5" data-name="skull-outline" transform="translate(1000 2097.405)" opacity="0.73">
        <path id="Path_293-5" data-name="Path 293" d="M97.939,49.114v8.75a5.656,5.656,0,0,1-3.555,5.252l-2.093.837a2.828,2.828,0,0,0-1.723,2.074l-.884,4.431a1.414,1.414,0,0,1-1.389,1.137H73.644a1.414,1.414,0,0,1-1.387-1.137l-.886-4.431a2.828,2.828,0,0,0-1.723-2.072l-2.093-.837A5.656,5.656,0,0,1,64,57.866v-8.9a16.97,16.97,0,1,1,33.939.145Z" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <circle id="Ellipse_27-5" data-name="Ellipse 27" cx="3.5" cy="3.5" r="3.5" transform="translate(70 50)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <circle id="Ellipse_28-5" data-name="Ellipse 28" cx="3.5" cy="3.5" r="3.5" transform="translate(85 50)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <path id="Path_294-5" data-name="Path 294" d="M212.242,336l-1.414,4.242h2.828Zm0,9.9v2.828M208,345.9v2.828m8.485-2.828v2.828" transform="translate(-131.273 -277.132)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      </g>
      <g id="skull-outline-6" data-name="skull-outline" transform="translate(1000 2417)" opacity="0.73">
        <path id="Path_293-6" data-name="Path 293" d="M97.939,49.114v8.75a5.656,5.656,0,0,1-3.555,5.252l-2.093.837a2.828,2.828,0,0,0-1.723,2.074l-.884,4.431a1.414,1.414,0,0,1-1.389,1.137H73.644a1.414,1.414,0,0,1-1.387-1.137l-.886-4.431a2.828,2.828,0,0,0-1.723-2.072l-2.093-.837A5.656,5.656,0,0,1,64,57.866v-8.9a16.97,16.97,0,1,1,33.939.145Z" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <circle id="Ellipse_27-6" data-name="Ellipse 27" cx="3.5" cy="3.5" r="3.5" transform="translate(70 50)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <circle id="Ellipse_28-6" data-name="Ellipse 28" cx="3.5" cy="3.5" r="3.5" transform="translate(85 50)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <path id="Path_294-6" data-name="Path 294" d="M212.242,336l-1.414,4.242h2.828Zm0,9.9v2.828M208,345.9v2.828m8.485-2.828v2.828" transform="translate(-131.273 -277.132)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      </g>
      <g id="skull-outline-7" data-name="skull-outline" transform="translate(744 2289.405)" opacity="0.73">
        <path id="Path_293-7" data-name="Path 293" d="M97.939,49.114v8.75a5.656,5.656,0,0,1-3.555,5.252l-2.093.837a2.828,2.828,0,0,0-1.723,2.074l-.884,4.431a1.414,1.414,0,0,1-1.389,1.137H73.644a1.414,1.414,0,0,1-1.387-1.137l-.886-4.431a2.828,2.828,0,0,0-1.723-2.072l-2.093-.837A5.656,5.656,0,0,1,64,57.866v-8.9a16.97,16.97,0,1,1,33.939.145Z" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <circle id="Ellipse_27-7" data-name="Ellipse 27" cx="3.5" cy="3.5" r="3.5" transform="translate(70 50)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <circle id="Ellipse_28-7" data-name="Ellipse 28" cx="3.5" cy="3.5" r="3.5" transform="translate(85 50)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <path id="Path_294-7" data-name="Path 294" d="M212.242,336l-1.414,4.242h2.828Zm0,9.9v2.828M208,345.9v2.828m8.485-2.828v2.828" transform="translate(-131.273 -277.132)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      </g>
      <g id="skull-outline-8" data-name="skull-outline" transform="translate(464 2289.405)" opacity="0.73">
        <path id="Path_293-8" data-name="Path 293" d="M97.939,49.114v8.75a5.656,5.656,0,0,1-3.555,5.252l-2.093.837a2.828,2.828,0,0,0-1.723,2.074l-.884,4.431a1.414,1.414,0,0,1-1.389,1.137H73.644a1.414,1.414,0,0,1-1.387-1.137l-.886-4.431a2.828,2.828,0,0,0-1.723-2.072l-2.093-.837A5.656,5.656,0,0,1,64,57.866v-8.9a16.97,16.97,0,1,1,33.939.145Z" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <circle id="Ellipse_27-8" data-name="Ellipse 27" cx="3.5" cy="3.5" r="3.5" transform="translate(70 50)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <circle id="Ellipse_28-8" data-name="Ellipse 28" cx="3.5" cy="3.5" r="3.5" transform="translate(85 50)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <path id="Path_294-8" data-name="Path 294" d="M212.242,336l-1.414,4.242h2.828Zm0,9.9v2.828M208,345.9v2.828m8.485-2.828v2.828" transform="translate(-131.273 -277.132)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      </g>
      <g id="skull-outline-9" data-name="skull-outline" transform="translate(806.062 2481)" opacity="0.73">
        <path id="Path_293-9" data-name="Path 293" d="M97.939,49.114v8.75a5.656,5.656,0,0,1-3.555,5.252l-2.093.837a2.828,2.828,0,0,0-1.723,2.074l-.884,4.431a1.414,1.414,0,0,1-1.389,1.137H73.644a1.414,1.414,0,0,1-1.387-1.137l-.886-4.431a2.828,2.828,0,0,0-1.723-2.072l-2.093-.837A5.656,5.656,0,0,1,64,57.866v-8.9a16.97,16.97,0,1,1,33.939.145Z" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <circle id="Ellipse_27-9" data-name="Ellipse 27" cx="3.5" cy="3.5" r="3.5" transform="translate(70 50)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <circle id="Ellipse_28-9" data-name="Ellipse 28" cx="3.5" cy="3.5" r="3.5" transform="translate(85 50)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <path id="Path_294-9" data-name="Path 294" d="M212.242,336l-1.414,4.242h2.828Zm0,9.9v2.828M208,345.9v2.828m8.485-2.828v2.828" transform="translate(-131.273 -277.132)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      </g>
      <g id="skull-outline-10" data-name="skull-outline" transform="translate(398.062 2481)" opacity="0.73">
        <path id="Path_293-10" data-name="Path 293" d="M97.939,49.114v8.75a5.656,5.656,0,0,1-3.555,5.252l-2.093.837a2.828,2.828,0,0,0-1.723,2.074l-.884,4.431a1.414,1.414,0,0,1-1.389,1.137H73.644a1.414,1.414,0,0,1-1.387-1.137l-.886-4.431a2.828,2.828,0,0,0-1.723-2.072l-2.093-.837A5.656,5.656,0,0,1,64,57.866v-8.9a16.97,16.97,0,1,1,33.939.145Z" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <circle id="Ellipse_27-10" data-name="Ellipse 27" cx="3.5" cy="3.5" r="3.5" transform="translate(70 50)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <circle id="Ellipse_28-10" data-name="Ellipse 28" cx="3.5" cy="3.5" r="3.5" transform="translate(85 50)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <path id="Path_294-10" data-name="Path 294" d="M212.242,336l-1.414,4.242h2.828Zm0,9.9v2.828M208,345.9v2.828m8.485-2.828v2.828" transform="translate(-131.273 -277.132)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      </g>
    </g>
    <g id="accessibility-outline" transform="translate(612.439 272.151)">
      <circle id="Ellipse_1" data-name="Ellipse 1" cx="14.95" cy="14.95" r="14.95" transform="translate(56.826)" fill="#fff" stroke="#d2d2d2" stroke-linejoin="round" stroke-width="13"/>
      <path id="Path_10" data-name="Path 10" d="M116.38,182.685c1.084-6.75,1.57-13.275-.187-17.786-1.495-3.879-4.747-6.051-8.671-7.531L72.94,146.178c-4.485-1.495-8.675-4-8.97-8.947a8.539,8.539,0,0,1,10.838-8.97S107.7,139.9,135.729,139.9s60.546-11.586,60.546-11.586c6.727-1.869,11.212,3.364,11.212,8.891,0,5.311-4.111,7.18-8.97,8.947l-32.889,11.926c-2.99,1.121-7.849,3.364-9.717,6.795-2.242,4.018-1.869,11.037-.785,17.786l2.205,11.074,13.982,61.256a8.765,8.765,0,0,1-7.251,10.368c-4.9.86-8.9-2.482-10.349-7.236l-14.038-43.328q-1.013-3.117-1.794-6.3l-2.153-8.775-1.981,8.091q-.942,3.868-2.168,7.654l-13.791,42.625c-1.495,4.8-5.419,8.129-10.315,7.273S99.1,259.53,100.2,254.989l13.974-61.23Z" transform="translate(-63.953 -86.095)" fill="#fff" stroke="#d2d2d2" stroke-linejoin="round" stroke-width="13"/>
    </g>
    <g id="Group_305" data-name="Group 305" transform="translate(52.402 960)">
      <g id="accessibility-outline-2" data-name="accessibility-outline" transform="translate(247.662 0)" opacity="0.76">
        <ellipse id="Ellipse_1-2" data-name="Ellipse 1" cx="17.076" cy="17.076" rx="17.076" ry="17.076" transform="translate(64.911 0)" fill="#fff" stroke="#e6e6e6" stroke-linejoin="round" stroke-width="19"/>
        <path id="Path_10-2" data-name="Path 10" d="M123.839,190.475c1.238-7.71,1.793-15.164-.213-20.317-1.708-4.431-5.422-6.912-9.9-8.6l-39.5-12.782c-5.123-1.708-9.909-4.568-10.246-10.22a9.754,9.754,0,0,1,12.38-10.246S113.922,141.6,145.94,141.6s69.16-13.234,69.16-13.234c7.684-2.135,12.807,3.842,12.807,10.156,0,6.066-4.7,8.2-10.246,10.22l-37.568,13.623c-3.415,1.281-8.965,3.842-11.1,7.761-2.561,4.589-2.135,12.607-.9,20.317l2.519,12.649,15.971,69.971a10.012,10.012,0,0,1-8.282,11.843c-5.593.982-10.165-2.835-11.821-8.265l-16.035-49.492q-1.157-3.56-2.049-7.2l-2.459-10.024-2.263,9.243q-1.076,4.419-2.476,8.743L125.448,276.6c-1.708,5.486-6.19,9.285-11.783,8.308s-9.563-6.656-8.308-11.843l15.962-69.941Z" transform="translate(-63.953 -80.144)" fill="#fff" stroke="#e6e6e6" stroke-linejoin="round" stroke-width="19"/>
      </g>
      <g id="bonfire-outline-2" data-name="bonfire-outline" transform="translate(196.426 108.542)">
        <path id="Path_282" data-name="Path 282" d="M167.25,354.045a10.309,10.309,0,0,0-10.394-9.212,10.439,10.439,0,0,0-10.2,7.906l-10.2,49.521a20.031,20.031,0,0,0-.521,4.415c0,11.167,9.346,18.928,20.917,18.928s20.922-7.76,20.922-18.928a20.26,20.26,0,0,0-.723-5.3Zm77.139,22.149a23.412,23.412,0,0,0-3.334-2.437L202.1,346.531c-3.793-2.381-7.844-2.314-10.786.56a7.581,7.581,0,0,0-1.121,9.638l29.417,38.662a20.492,20.492,0,0,0,2.241,2.628c5.1,5.7,16.406,6.012,22.62,0C250.6,391.906,250.525,381.013,244.39,376.194Zm29.277-40.332H234.209a4.8,4.8,0,0,0-4.976,4.572,5.216,5.216,0,0,0,3.877,5.133l37.222,11.515c5.407,1.261,12.691-3.558,12.691-9.576C283.024,339.852,278.766,335.862,273.667,335.862Zm-187.753,4.55c0-2.8-2.549-4.572-5.3-4.572H41.161c-4.97,0-9.161,5.368-9.161,11.386s7.071,11.117,12.5,9.856l37.782-11.515C84.737,344.833,85.914,343.214,85.914,340.412Zm27.08,6.164-38.97,27.108a18.122,18.122,0,0,0-3.362,2.437,14.753,14.753,0,0,0,0,21.606,16.468,16.468,0,0,0,22.615,0,17.231,17.231,0,0,0,2.241-2.622l29.439-38.444a7.389,7.389,0,0,0-1.121-9.559,8.4,8.4,0,0,0-10.842-.527Z" transform="translate(-32 -165.592)" fill="#c5c5c5"/>
        <path id="Path_283" data-name="Path 283" d="M269.5,84.16c0-31.21-27.579-49.958-52.782-52.143a4.483,4.483,0,0,0-4.869,4.32c-1.748,42.584-61.288,62.022-67.166,100.118-3.922,25.439,9.329,40.55,19.225,48.064a8.932,8.932,0,0,0,13.408-3.149c12.607-25.7,41.649-35.575,61.478-48.154C262.824,117.976,269.5,101.592,269.5,84.16Z" transform="translate(-81.235 -32)" fill="none" stroke="#c5c5c5" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18"/>
        <path id="Path_284" data-name="Path 284" d="M197.791,81.79c-7.183-12.887-17.1-17.37-33.149-17.723a2.163,2.163,0,0,0-2.275,1.967C161.835,85.208,144,91.164,144,107.022c0,10.853,3.02,16.249,9.615,22.009m107.184-.7c4.819,8.018,8.713,16.854,8.713,26.9,0,29.428-23.8,52.166-53.152,52.166a52.906,52.906,0,0,1-36.5-14.568" transform="translate(-81.244 -46.098)" fill="none" stroke="#c5c5c5" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18"/>
      </g>
      <g id="accessibility-outline-3" data-name="accessibility-outline" transform="translate(448.257 89.091)" opacity="0.76">
        <ellipse id="Ellipse_1-3" data-name="Ellipse 1" cx="17.076" cy="17.076" rx="17.076" ry="17.076" transform="translate(64.911 0)" fill="#fff" stroke="#e6e6e6" stroke-linejoin="round" stroke-width="19"/>
        <path id="Path_10-3" data-name="Path 10" d="M123.839,190.475c1.238-7.71,1.793-15.164-.213-20.317-1.708-4.431-5.422-6.912-9.9-8.6l-39.5-12.782c-5.123-1.708-9.909-4.568-10.246-10.22a9.754,9.754,0,0,1,12.38-10.246S113.922,141.6,145.94,141.6s69.16-13.234,69.16-13.234c7.684-2.135,12.807,3.842,12.807,10.156,0,6.066-4.7,8.2-10.246,10.22l-37.568,13.623c-3.415,1.281-8.965,3.842-11.1,7.761-2.561,4.589-2.135,12.607-.9,20.317l2.519,12.649,15.971,69.971a10.012,10.012,0,0,1-8.282,11.843c-5.593.982-10.165-2.835-11.821-8.265l-16.035-49.492q-1.157-3.56-2.049-7.2l-2.459-10.024-2.263,9.243q-1.076,4.419-2.476,8.743L125.448,276.6c-1.708,5.486-6.19,9.285-11.783,8.308s-9.563-6.656-8.308-11.843l15.962-69.941Z" transform="translate(-63.953 -80.144)" fill="#fff" stroke="#e6e6e6" stroke-linejoin="round" stroke-width="19"/>
      </g>
      <g id="accessibility-outline-4" data-name="accessibility-outline" transform="translate(0 89.091)" opacity="0.76">
        <ellipse id="Ellipse_1-4" data-name="Ellipse 1" cx="17.076" cy="17.076" rx="17.076" ry="17.076" transform="translate(64.911 0)" fill="#fff" stroke="#e6e6e6" stroke-linejoin="round" stroke-width="19"/>
        <path id="Path_10-4" data-name="Path 10" d="M123.839,190.475c1.238-7.71,1.793-15.164-.213-20.317-1.708-4.431-5.422-6.912-9.9-8.6l-39.5-12.782c-5.123-1.708-9.909-4.568-10.246-10.22a9.754,9.754,0,0,1,12.38-10.246S113.922,141.6,145.94,141.6s69.16-13.234,69.16-13.234c7.684-2.135,12.807,3.842,12.807,10.156,0,6.066-4.7,8.2-10.246,10.22l-37.568,13.623c-3.415,1.281-8.965,3.842-11.1,7.761-2.561,4.589-2.135,12.607-.9,20.317l2.519,12.649,15.971,69.971a10.012,10.012,0,0,1-8.282,11.843c-5.593.982-10.165-2.835-11.821-8.265l-16.035-49.492q-1.157-3.56-2.049-7.2l-2.459-10.024-2.263,9.243q-1.076,4.419-2.476,8.743L125.448,276.6c-1.708,5.486-6.19,9.285-11.783,8.308s-9.563-6.656-8.308-11.843l15.962-69.941Z" transform="translate(-63.953 -80.144)" fill="#fff" stroke="#e6e6e6" stroke-linejoin="round" stroke-width="19"/>
      </g>
    </g>
    <g id="Group_306" data-name="Group 306" transform="translate(701.386 962.577)">
      <g id="accessibility-outline-5" data-name="accessibility-outline" transform="translate(247.662 0)" opacity="0.76">
        <ellipse id="Ellipse_1-5" data-name="Ellipse 1" cx="17.076" cy="17.076" rx="17.076" ry="17.076" transform="translate(64.911 0)" fill="#fff" stroke="#e6e6e6" stroke-linejoin="round" stroke-width="19"/>
        <path id="Path_10-5" data-name="Path 10" d="M123.839,190.475c1.238-7.71,1.793-15.164-.213-20.317-1.708-4.431-5.422-6.912-9.9-8.6l-39.5-12.782c-5.123-1.708-9.909-4.568-10.246-10.22a9.754,9.754,0,0,1,12.38-10.246S113.922,141.6,145.94,141.6s69.16-13.234,69.16-13.234c7.684-2.135,12.807,3.842,12.807,10.156,0,6.066-4.7,8.2-10.246,10.22l-37.568,13.623c-3.415,1.281-8.965,3.842-11.1,7.761-2.561,4.589-2.135,12.607-.9,20.317l2.519,12.649,15.971,69.971a10.012,10.012,0,0,1-8.282,11.843c-5.593.982-10.165-2.835-11.821-8.265l-16.035-49.492q-1.157-3.56-2.049-7.2l-2.459-10.024-2.263,9.243q-1.076,4.419-2.476,8.743L125.448,276.6c-1.708,5.486-6.19,9.285-11.783,8.308s-9.563-6.656-8.308-11.843l15.962-69.941Z" transform="translate(-63.953 -80.144)" fill="#fff" stroke="#e6e6e6" stroke-linejoin="round" stroke-width="19"/>
      </g>
      <g id="bonfire-outline-3" data-name="bonfire-outline" transform="translate(196.426 108.542)">
        <path id="Path_282-2" data-name="Path 282" d="M167.25,354.045a10.309,10.309,0,0,0-10.394-9.212,10.439,10.439,0,0,0-10.2,7.906l-10.2,49.521a20.031,20.031,0,0,0-.521,4.415c0,11.167,9.346,18.928,20.917,18.928s20.922-7.76,20.922-18.928a20.26,20.26,0,0,0-.723-5.3Zm77.139,22.149a23.412,23.412,0,0,0-3.334-2.437L202.1,346.531c-3.793-2.381-7.844-2.314-10.786.56a7.581,7.581,0,0,0-1.121,9.638l29.417,38.662a20.492,20.492,0,0,0,2.241,2.628c5.1,5.7,16.406,6.012,22.62,0C250.6,391.906,250.525,381.013,244.39,376.194Zm29.277-40.332H234.209a4.8,4.8,0,0,0-4.976,4.572,5.216,5.216,0,0,0,3.877,5.133l37.222,11.515c5.407,1.261,12.691-3.558,12.691-9.576C283.024,339.852,278.766,335.862,273.667,335.862Zm-187.753,4.55c0-2.8-2.549-4.572-5.3-4.572H41.161c-4.97,0-9.161,5.368-9.161,11.386s7.071,11.117,12.5,9.856l37.782-11.515C84.737,344.833,85.914,343.214,85.914,340.412Zm27.08,6.164-38.97,27.108a18.122,18.122,0,0,0-3.362,2.437,14.753,14.753,0,0,0,0,21.606,16.468,16.468,0,0,0,22.615,0,17.231,17.231,0,0,0,2.241-2.622l29.439-38.444a7.389,7.389,0,0,0-1.121-9.559,8.4,8.4,0,0,0-10.842-.527Z" transform="translate(-32 -165.592)" fill="#c5c5c5"/>
        <path id="Path_283-2" data-name="Path 283" d="M269.5,84.16c0-31.21-27.579-49.958-52.782-52.143a4.483,4.483,0,0,0-4.869,4.32c-1.748,42.584-61.288,62.022-67.166,100.118-3.922,25.439,9.329,40.55,19.225,48.064a8.932,8.932,0,0,0,13.408-3.149c12.607-25.7,41.649-35.575,61.478-48.154C262.824,117.976,269.5,101.592,269.5,84.16Z" transform="translate(-81.235 -32)" fill="none" stroke="#c5c5c5" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18"/>
        <path id="Path_284-2" data-name="Path 284" d="M197.791,81.79c-7.183-12.887-17.1-17.37-33.149-17.723a2.163,2.163,0,0,0-2.275,1.967C161.835,85.208,144,91.164,144,107.022c0,10.853,3.02,16.249,9.615,22.009m107.184-.7c4.819,8.018,8.713,16.854,8.713,26.9,0,29.428-23.8,52.166-53.152,52.166a52.906,52.906,0,0,1-36.5-14.568" transform="translate(-81.244 -46.098)" fill="none" stroke="#c5c5c5" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18"/>
      </g>
      <g id="accessibility-outline-6" data-name="accessibility-outline" transform="translate(448.257 89.091)" opacity="0.76">
        <ellipse id="Ellipse_1-6" data-name="Ellipse 1" cx="17.076" cy="17.076" rx="17.076" ry="17.076" transform="translate(64.911 0)" fill="#fff" stroke="#e6e6e6" stroke-linejoin="round" stroke-width="19"/>
        <path id="Path_10-6" data-name="Path 10" d="M123.839,190.475c1.238-7.71,1.793-15.164-.213-20.317-1.708-4.431-5.422-6.912-9.9-8.6l-39.5-12.782c-5.123-1.708-9.909-4.568-10.246-10.22a9.754,9.754,0,0,1,12.38-10.246S113.922,141.6,145.94,141.6s69.16-13.234,69.16-13.234c7.684-2.135,12.807,3.842,12.807,10.156,0,6.066-4.7,8.2-10.246,10.22l-37.568,13.623c-3.415,1.281-8.965,3.842-11.1,7.761-2.561,4.589-2.135,12.607-.9,20.317l2.519,12.649,15.971,69.971a10.012,10.012,0,0,1-8.282,11.843c-5.593.982-10.165-2.835-11.821-8.265l-16.035-49.492q-1.157-3.56-2.049-7.2l-2.459-10.024-2.263,9.243q-1.076,4.419-2.476,8.743L125.448,276.6c-1.708,5.486-6.19,9.285-11.783,8.308s-9.563-6.656-8.308-11.843l15.962-69.941Z" transform="translate(-63.953 -80.144)" fill="#fff" stroke="#e6e6e6" stroke-linejoin="round" stroke-width="19"/>
      </g>
      <g id="accessibility-outline-7" data-name="accessibility-outline" transform="translate(0 89.091)" opacity="0.76">
        <ellipse id="Ellipse_1-7" data-name="Ellipse 1" cx="17.076" cy="17.076" rx="17.076" ry="17.076" transform="translate(64.911 0)" fill="#fff" stroke="#e6e6e6" stroke-linejoin="round" stroke-width="19"/>
        <path id="Path_10-7" data-name="Path 10" d="M123.839,190.475c1.238-7.71,1.793-15.164-.213-20.317-1.708-4.431-5.422-6.912-9.9-8.6l-39.5-12.782c-5.123-1.708-9.909-4.568-10.246-10.22a9.754,9.754,0,0,1,12.38-10.246S113.922,141.6,145.94,141.6s69.16-13.234,69.16-13.234c7.684-2.135,12.807,3.842,12.807,10.156,0,6.066-4.7,8.2-10.246,10.22l-37.568,13.623c-3.415,1.281-8.965,3.842-11.1,7.761-2.561,4.589-2.135,12.607-.9,20.317l2.519,12.649,15.971,69.971a10.012,10.012,0,0,1-8.282,11.843c-5.593.982-10.165-2.835-11.821-8.265l-16.035-49.492q-1.157-3.56-2.049-7.2l-2.459-10.024-2.263,9.243q-1.076,4.419-2.476,8.743L125.448,276.6c-1.708,5.486-6.19,9.285-11.783,8.308s-9.563-6.656-8.308-11.843l15.962-69.941Z" transform="translate(-63.953 -80.144)" fill="#fff" stroke="#e6e6e6" stroke-linejoin="round" stroke-width="19"/>
      </g>
    </g>
    <g id="Group_316" data-name="Group 316">
      <g id="flame-outline" transform="translate(364.308 1768)" opacity="0.73">
        <path id="Path_286" data-name="Path 286" d="M112,142.154c0-32.192,42.923-57.115,33.231-94.154,22.846,0,66.462,33.231,66.462,94.154a49.846,49.846,0,1,1-99.692,0Z" transform="translate(0)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/>
        <path id="Path_287" data-name="Path 287" d="M236.308,284.308c0,19.977-11.077,27.692-22.154,27.692S192,304.284,192,284.308,205.846,254.538,203.077,240C217.615,240,236.308,264.331,236.308,284.308Z" transform="translate(-52.308 -125.538)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/>
      </g>
      <g id="bonfire-outline-4" data-name="bonfire-outline" transform="translate(456.828 1875.988)">
        <path id="Path_282-3" data-name="Path 282" d="M104.83,345.643a5.551,5.551,0,0,0-5.6-4.96,5.621,5.621,0,0,0-5.491,4.257L88.25,371.606a10.786,10.786,0,0,0-.281,2.378c0,6.013,5.033,10.192,11.263,10.192S110.5,380,110.5,373.984a10.91,10.91,0,0,0-.389-2.851Zm41.538,11.927a12.605,12.605,0,0,0-1.8-1.312L123.594,341.6c-2.043-1.282-4.224-1.246-5.808.3a4.082,4.082,0,0,0-.6,5.19l15.84,20.819a11.035,11.035,0,0,0,1.207,1.415c2.746,3.069,8.834,3.237,12.181,0C149.711,366.03,149.672,360.165,146.368,357.57Zm15.765-21.718H140.886a2.584,2.584,0,0,0-2.679,2.462,2.809,2.809,0,0,0,2.088,2.764l20.043,6.2c2.912.679,6.834-1.916,6.834-5.156C167.172,338,164.879,335.852,162.133,335.852Zm-101.1,2.45a2.638,2.638,0,0,0-2.851-2.462H36.933c-2.676,0-4.933,2.891-4.933,6.131s3.808,5.986,6.728,5.307l20.345-6.2A2.553,2.553,0,0,0,61.032,338.3Zm14.582,3.319-20.985,14.6a9.76,9.76,0,0,0-1.81,1.313,7.944,7.944,0,0,0,0,11.634,8.868,8.868,0,0,0,12.178,0,9.278,9.278,0,0,0,1.207-1.412l15.853-20.7a3.979,3.979,0,0,0-.6-5.147,4.526,4.526,0,0,0-5.838-.284Z" transform="translate(-32 -244.164)" fill="#c5c5c5"/>
      </g>
    </g>
    <g id="Group_317" data-name="Group 317" transform="translate(-424.828 -336)">
      <g id="flame-outline-2" data-name="flame-outline" transform="translate(364.308 1768)" opacity="0.73">
        <path id="Path_286-2" data-name="Path 286" d="M112,142.154c0-32.192,42.923-57.115,33.231-94.154,22.846,0,66.462,33.231,66.462,94.154a49.846,49.846,0,1,1-99.692,0Z" transform="translate(0)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/>
        <path id="Path_287-2" data-name="Path 287" d="M236.308,284.308c0,19.977-11.077,27.692-22.154,27.692S192,304.284,192,284.308,205.846,254.538,203.077,240C217.615,240,236.308,264.331,236.308,284.308Z" transform="translate(-52.308 -125.538)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/>
      </g>
      <g id="bonfire-outline-5" data-name="bonfire-outline" transform="translate(456.828 1875.988)">
        <path id="Path_282-4" data-name="Path 282" d="M104.83,345.643a5.551,5.551,0,0,0-5.6-4.96,5.621,5.621,0,0,0-5.491,4.257L88.25,371.606a10.786,10.786,0,0,0-.281,2.378c0,6.013,5.033,10.192,11.263,10.192S110.5,380,110.5,373.984a10.91,10.91,0,0,0-.389-2.851Zm41.538,11.927a12.605,12.605,0,0,0-1.8-1.312L123.594,341.6c-2.043-1.282-4.224-1.246-5.808.3a4.082,4.082,0,0,0-.6,5.19l15.84,20.819a11.035,11.035,0,0,0,1.207,1.415c2.746,3.069,8.834,3.237,12.181,0C149.711,366.03,149.672,360.165,146.368,357.57Zm15.765-21.718H140.886a2.584,2.584,0,0,0-2.679,2.462,2.809,2.809,0,0,0,2.088,2.764l20.043,6.2c2.912.679,6.834-1.916,6.834-5.156C167.172,338,164.879,335.852,162.133,335.852Zm-101.1,2.45a2.638,2.638,0,0,0-2.851-2.462H36.933c-2.676,0-4.933,2.891-4.933,6.131s3.808,5.986,6.728,5.307l20.345-6.2A2.553,2.553,0,0,0,61.032,338.3Zm14.582,3.319-20.985,14.6a9.76,9.76,0,0,0-1.81,1.313,7.944,7.944,0,0,0,0,11.634,8.868,8.868,0,0,0,12.178,0,9.278,9.278,0,0,0,1.207-1.412l15.853-20.7a3.979,3.979,0,0,0-.6-5.147,4.526,4.526,0,0,0-5.838-.284Z" transform="translate(-32 -244.164)" fill="#c5c5c5"/>
      </g>
    </g>
    <g id="Group_318" data-name="Group 318" transform="translate(-400 376)">
      <g id="flame-outline-3" data-name="flame-outline" transform="translate(364.308 1768)" opacity="0.73">
        <path id="Path_286-3" data-name="Path 286" d="M112,142.154c0-32.192,42.923-57.115,33.231-94.154,22.846,0,66.462,33.231,66.462,94.154a49.846,49.846,0,1,1-99.692,0Z" transform="translate(0)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/>
        <path id="Path_287-3" data-name="Path 287" d="M236.308,284.308c0,19.977-11.077,27.692-22.154,27.692S192,304.284,192,284.308,205.846,254.538,203.077,240C217.615,240,236.308,264.331,236.308,284.308Z" transform="translate(-52.308 -125.538)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/>
      </g>
      <g id="bonfire-outline-6" data-name="bonfire-outline" transform="translate(456.828 1875.988)">
        <path id="Path_282-5" data-name="Path 282" d="M104.83,345.643a5.551,5.551,0,0,0-5.6-4.96,5.621,5.621,0,0,0-5.491,4.257L88.25,371.606a10.786,10.786,0,0,0-.281,2.378c0,6.013,5.033,10.192,11.263,10.192S110.5,380,110.5,373.984a10.91,10.91,0,0,0-.389-2.851Zm41.538,11.927a12.605,12.605,0,0,0-1.8-1.312L123.594,341.6c-2.043-1.282-4.224-1.246-5.808.3a4.082,4.082,0,0,0-.6,5.19l15.84,20.819a11.035,11.035,0,0,0,1.207,1.415c2.746,3.069,8.834,3.237,12.181,0C149.711,366.03,149.672,360.165,146.368,357.57Zm15.765-21.718H140.886a2.584,2.584,0,0,0-2.679,2.462,2.809,2.809,0,0,0,2.088,2.764l20.043,6.2c2.912.679,6.834-1.916,6.834-5.156C167.172,338,164.879,335.852,162.133,335.852Zm-101.1,2.45a2.638,2.638,0,0,0-2.851-2.462H36.933c-2.676,0-4.933,2.891-4.933,6.131s3.808,5.986,6.728,5.307l20.345-6.2A2.553,2.553,0,0,0,61.032,338.3Zm14.582,3.319-20.985,14.6a9.76,9.76,0,0,0-1.81,1.313,7.944,7.944,0,0,0,0,11.634,8.868,8.868,0,0,0,12.178,0,9.278,9.278,0,0,0,1.207-1.412l15.853-20.7a3.979,3.979,0,0,0-.6-5.147,4.526,4.526,0,0,0-5.838-.284Z" transform="translate(-32 -244.164)" fill="#c5c5c5"/>
      </g>
    </g>
    <g id="Group_319" data-name="Group 319" transform="translate(-400 728)">
      <g id="flame-outline-4" data-name="flame-outline" transform="translate(364.308 1768)" opacity="0.73">
        <path id="Path_286-4" data-name="Path 286" d="M112,142.154c0-32.192,42.923-57.115,33.231-94.154,22.846,0,66.462,33.231,66.462,94.154a49.846,49.846,0,1,1-99.692,0Z" transform="translate(0)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/>
        <path id="Path_287-4" data-name="Path 287" d="M236.308,284.308c0,19.977-11.077,27.692-22.154,27.692S192,304.284,192,284.308,205.846,254.538,203.077,240C217.615,240,236.308,264.331,236.308,284.308Z" transform="translate(-52.308 -125.538)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/>
      </g>
      <g id="bonfire-outline-7" data-name="bonfire-outline" transform="translate(456.828 1875.988)">
        <path id="Path_282-6" data-name="Path 282" d="M104.83,345.643a5.551,5.551,0,0,0-5.6-4.96,5.621,5.621,0,0,0-5.491,4.257L88.25,371.606a10.786,10.786,0,0,0-.281,2.378c0,6.013,5.033,10.192,11.263,10.192S110.5,380,110.5,373.984a10.91,10.91,0,0,0-.389-2.851Zm41.538,11.927a12.605,12.605,0,0,0-1.8-1.312L123.594,341.6c-2.043-1.282-4.224-1.246-5.808.3a4.082,4.082,0,0,0-.6,5.19l15.84,20.819a11.035,11.035,0,0,0,1.207,1.415c2.746,3.069,8.834,3.237,12.181,0C149.711,366.03,149.672,360.165,146.368,357.57Zm15.765-21.718H140.886a2.584,2.584,0,0,0-2.679,2.462,2.809,2.809,0,0,0,2.088,2.764l20.043,6.2c2.912.679,6.834-1.916,6.834-5.156C167.172,338,164.879,335.852,162.133,335.852Zm-101.1,2.45a2.638,2.638,0,0,0-2.851-2.462H36.933c-2.676,0-4.933,2.891-4.933,6.131s3.808,5.986,6.728,5.307l20.345-6.2A2.553,2.553,0,0,0,61.032,338.3Zm14.582,3.319-20.985,14.6a9.76,9.76,0,0,0-1.81,1.313,7.944,7.944,0,0,0,0,11.634,8.868,8.868,0,0,0,12.178,0,9.278,9.278,0,0,0,1.207-1.412l15.853-20.7a3.979,3.979,0,0,0-.6-5.147,4.526,4.526,0,0,0-5.838-.284Z" transform="translate(-32 -244.164)" fill="#c5c5c5"/>
      </g>
    </g>
    <g id="Group_320" data-name="Group 320" transform="translate(719.172 376)">
      <g id="flame-outline-5" data-name="flame-outline" transform="translate(364.308 1768)" opacity="0.73">
        <path id="Path_286-5" data-name="Path 286" d="M112,142.154c0-32.192,42.923-57.115,33.231-94.154,22.846,0,66.462,33.231,66.462,94.154a49.846,49.846,0,1,1-99.692,0Z" transform="translate(0)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/>
        <path id="Path_287-5" data-name="Path 287" d="M236.308,284.308c0,19.977-11.077,27.692-22.154,27.692S192,304.284,192,284.308,205.846,254.538,203.077,240C217.615,240,236.308,264.331,236.308,284.308Z" transform="translate(-52.308 -125.538)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/>
      </g>
      <g id="bonfire-outline-8" data-name="bonfire-outline" transform="translate(456.828 1875.988)">
        <path id="Path_282-7" data-name="Path 282" d="M104.83,345.643a5.551,5.551,0,0,0-5.6-4.96,5.621,5.621,0,0,0-5.491,4.257L88.25,371.606a10.786,10.786,0,0,0-.281,2.378c0,6.013,5.033,10.192,11.263,10.192S110.5,380,110.5,373.984a10.91,10.91,0,0,0-.389-2.851Zm41.538,11.927a12.605,12.605,0,0,0-1.8-1.312L123.594,341.6c-2.043-1.282-4.224-1.246-5.808.3a4.082,4.082,0,0,0-.6,5.19l15.84,20.819a11.035,11.035,0,0,0,1.207,1.415c2.746,3.069,8.834,3.237,12.181,0C149.711,366.03,149.672,360.165,146.368,357.57Zm15.765-21.718H140.886a2.584,2.584,0,0,0-2.679,2.462,2.809,2.809,0,0,0,2.088,2.764l20.043,6.2c2.912.679,6.834-1.916,6.834-5.156C167.172,338,164.879,335.852,162.133,335.852Zm-101.1,2.45a2.638,2.638,0,0,0-2.851-2.462H36.933c-2.676,0-4.933,2.891-4.933,6.131s3.808,5.986,6.728,5.307l20.345-6.2A2.553,2.553,0,0,0,61.032,338.3Zm14.582,3.319-20.985,14.6a9.76,9.76,0,0,0-1.81,1.313,7.944,7.944,0,0,0,0,11.634,8.868,8.868,0,0,0,12.178,0,9.278,9.278,0,0,0,1.207-1.412l15.853-20.7a3.979,3.979,0,0,0-.6-5.147,4.526,4.526,0,0,0-5.838-.284Z" transform="translate(-32 -244.164)" fill="#c5c5c5"/>
      </g>
    </g>
    <g id="Group_321" data-name="Group 321" transform="translate(719.172 728)">
      <g id="flame-outline-6" data-name="flame-outline" transform="translate(364.308 1768)" opacity="0.73">
        <path id="Path_286-6" data-name="Path 286" d="M112,142.154c0-32.192,42.923-57.115,33.231-94.154,22.846,0,66.462,33.231,66.462,94.154a49.846,49.846,0,1,1-99.692,0Z" transform="translate(0)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/>
        <path id="Path_287-6" data-name="Path 287" d="M236.308,284.308c0,19.977-11.077,27.692-22.154,27.692S192,304.284,192,284.308,205.846,254.538,203.077,240C217.615,240,236.308,264.331,236.308,284.308Z" transform="translate(-52.308 -125.538)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/>
      </g>
      <g id="bonfire-outline-9" data-name="bonfire-outline" transform="translate(456.828 1875.988)">
        <path id="Path_282-8" data-name="Path 282" d="M104.83,345.643a5.551,5.551,0,0,0-5.6-4.96,5.621,5.621,0,0,0-5.491,4.257L88.25,371.606a10.786,10.786,0,0,0-.281,2.378c0,6.013,5.033,10.192,11.263,10.192S110.5,380,110.5,373.984a10.91,10.91,0,0,0-.389-2.851Zm41.538,11.927a12.605,12.605,0,0,0-1.8-1.312L123.594,341.6c-2.043-1.282-4.224-1.246-5.808.3a4.082,4.082,0,0,0-.6,5.19l15.84,20.819a11.035,11.035,0,0,0,1.207,1.415c2.746,3.069,8.834,3.237,12.181,0C149.711,366.03,149.672,360.165,146.368,357.57Zm15.765-21.718H140.886a2.584,2.584,0,0,0-2.679,2.462,2.809,2.809,0,0,0,2.088,2.764l20.043,6.2c2.912.679,6.834-1.916,6.834-5.156C167.172,338,164.879,335.852,162.133,335.852Zm-101.1,2.45a2.638,2.638,0,0,0-2.851-2.462H36.933c-2.676,0-4.933,2.891-4.933,6.131s3.808,5.986,6.728,5.307l20.345-6.2A2.553,2.553,0,0,0,61.032,338.3Zm14.582,3.319-20.985,14.6a9.76,9.76,0,0,0-1.81,1.313,7.944,7.944,0,0,0,0,11.634,8.868,8.868,0,0,0,12.178,0,9.278,9.278,0,0,0,1.207-1.412l15.853-20.7a3.979,3.979,0,0,0-.6-5.147,4.526,4.526,0,0,0-5.838-.284Z" transform="translate(-32 -244.164)" fill="#c5c5c5"/>
      </g>
    </g>
    <g id="Group_322" data-name="Group 322" transform="translate(695.172 -160)">
      <g id="flame-outline-7" data-name="flame-outline" transform="translate(470.074 1816)" opacity="0.73">
        <path id="Path_286-7" data-name="Path 286" d="M112,112.025C112,90.134,141.188,73.186,134.6,48c15.535,0,45.194,22.6,45.194,64.025a33.9,33.9,0,1,1-67.791,0Z" transform="translate(-112 -48)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/>
        <path id="Path_287-7" data-name="Path 287" d="M222.129,270.129c0,13.584-7.532,18.831-15.065,18.831S192,283.713,192,270.129s9.415-20.243,7.532-30.129C209.418,240,222.129,256.545,222.129,270.129Z" transform="translate(-173.169 -194.806)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/>
      </g>
      <g id="bonfire-outline-10" data-name="bonfire-outline" transform="translate(456.828 1919.131)">
        <path id="Path_282-9" data-name="Path 282" d="M81.524,342.506a3.775,3.775,0,0,0-3.806-3.373,3.822,3.822,0,0,0-3.734,2.895L70.25,360.161a7.334,7.334,0,0,0-.191,1.617c0,4.089,3.422,6.931,7.659,6.931s7.661-2.842,7.661-6.931a7.419,7.419,0,0,0-.265-1.939Zm28.246,8.11a8.574,8.574,0,0,0-1.221-.892l-14.266-9.969a3.05,3.05,0,0,0-3.95.205,2.776,2.776,0,0,0-.41,3.529L100.7,357.646a7.506,7.506,0,0,0,.821.962c1.867,2.087,6.007,2.2,8.283,0C112.044,356.369,112.017,352.381,109.77,350.616Zm10.72-14.768H106.042a1.757,1.757,0,0,0-1.822,1.674,1.91,1.91,0,0,0,1.42,1.879l13.63,4.216c1.98.462,4.647-1.3,4.647-3.506C123.917,337.309,122.358,335.848,120.491,335.848Zm-68.749,1.666A1.794,1.794,0,0,0,49.8,335.84H35.355c-1.82,0-3.355,1.966-3.355,4.169a4.03,4.03,0,0,0,4.575,3.609L50.41,339.4A1.736,1.736,0,0,0,51.742,337.514Zm9.916,2.257L47.388,349.7a6.636,6.636,0,0,0-1.231.893,5.4,5.4,0,0,0,0,7.911,6.03,6.03,0,0,0,8.281,0,6.308,6.308,0,0,0,.821-.96l10.78-14.077a2.706,2.706,0,0,0-.41-3.5,3.078,3.078,0,0,0-3.97-.193Z" transform="translate(-32 -335.84)" fill="#c5c5c5"/>
      </g>
    </g>
    <g id="bonfire-outline-11" data-name="bonfire-outline" transform="translate(557.488 2608)">
      <path id="Path_282-10" data-name="Path 282" d="M167.25,354.045a10.309,10.309,0,0,0-10.394-9.212,10.439,10.439,0,0,0-10.2,7.906l-10.2,49.521a20.031,20.031,0,0,0-.521,4.415c0,11.167,9.346,18.928,20.917,18.928s20.922-7.76,20.922-18.928a20.26,20.26,0,0,0-.723-5.3Zm77.139,22.149a23.412,23.412,0,0,0-3.334-2.437L202.1,346.531c-3.793-2.381-7.844-2.314-10.786.56a7.581,7.581,0,0,0-1.121,9.638l29.417,38.662a20.492,20.492,0,0,0,2.241,2.628c5.1,5.7,16.406,6.012,22.62,0C250.6,391.906,250.525,381.013,244.39,376.194Zm29.277-40.332H234.209a4.8,4.8,0,0,0-4.976,4.572,5.216,5.216,0,0,0,3.877,5.133l37.222,11.515c5.407,1.261,12.691-3.558,12.691-9.576C283.024,339.852,278.766,335.862,273.667,335.862Zm-187.753,4.55c0-2.8-2.549-4.572-5.3-4.572H41.161c-4.97,0-9.161,5.368-9.161,11.386s7.071,11.117,12.5,9.856l37.782-11.515C84.737,344.833,85.914,343.214,85.914,340.412Zm27.08,6.164-38.97,27.108a18.122,18.122,0,0,0-3.362,2.437,14.753,14.753,0,0,0,0,21.606,16.468,16.468,0,0,0,22.615,0,17.231,17.231,0,0,0,2.241-2.622l29.439-38.444a7.389,7.389,0,0,0-1.121-9.559,8.4,8.4,0,0,0-10.842-.527Z" transform="translate(-32 -165.592)" fill="#c5c5c5"/>
      <path id="Path_283-3" data-name="Path 283" d="M269.5,84.16c0-31.21-27.579-49.958-52.782-52.143a4.483,4.483,0,0,0-4.869,4.32c-1.748,42.584-61.288,62.022-67.166,100.118-3.922,25.439,9.329,40.55,19.225,48.064a8.932,8.932,0,0,0,13.408-3.149c12.607-25.7,41.649-35.575,61.478-48.154C262.824,117.976,269.5,101.592,269.5,84.16Z" transform="translate(-81.235 -32)" fill="none" stroke="#c5c5c5" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18"/>
      <path id="Path_284-3" data-name="Path 284" d="M197.791,81.79c-7.183-12.887-17.1-17.37-33.149-17.723a2.163,2.163,0,0,0-2.275,1.967C161.835,85.208,144,91.164,144,107.022c0,10.853,3.02,16.249,9.615,22.009m107.184-.7c4.819,8.018,8.713,16.854,8.713,26.9,0,29.428-23.8,52.166-53.152,52.166a52.906,52.906,0,0,1-36.5-14.568" transform="translate(-81.244 -46.098)" fill="none" stroke="#c5c5c5" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18"/>
    </g>
  </g>
</svg>


</body>

</html>

  `)
});



module.exports = router;
