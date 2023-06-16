var express = require('express');
var router = express.Router();

/* GET exp. */
router.get('/', function(req, res, next) {
  // res.render('index', {});
  res.send
  (`

  <html>

  <head>
  <style>

  #close-circle:hover {
    stroke:black;
  }

  .svg {
    width:100%;
    height:auto;
    margin:auto;
  }
  </style>
  </head>
  <body>
  <svg class="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1366" height="6174" viewBox="0 0 1366 6174">
  <defs>
    <clipPath id="clip-pw.person">
      <rect width="1366" height="6174"/>
    </clipPath>
  </defs>
  <g id="pw.person" clip-path="url(#clip-pw.person)">
    <rect width="1366" height="6174" fill="#fff"/>
    <a href="/"> <path id="close-outline" d="M340,340,144,144m196,0L144,340" transform="translate(-12.5 -34.5)" fill="none" stroke="#e9e9e9" stroke-linecap="round" stroke-linejoin="round" stroke-width="45"/> </a>
    <g id="accessibility-outline" transform="translate(688.6 305.5)">
      <g id="accessibility-outline-2" data-name="accessibility-outline" transform="translate(-63.953 -16)" opacity="0.94">
        <circle id="Ellipse_1" data-name="Ellipse 1" cx="40.042" cy="40.042" r="40.042" transform="translate(216.158 16)" fill="#fff" stroke="#d0cbcb" stroke-linejoin="round" stroke-width="19"/>
        <path id="Path_10" data-name="Path 10" d="M204.376,274.593c2.9-18.079,4.2-35.557-.5-47.64-4-10.391-12.713-16.207-23.224-20.171L88.025,176.811c-12.013-4-23.234-10.711-24.025-23.965-1-17.018,14.015-28.029,29.03-24.025,0,0,88.092,31.172,163.17,31.172s162.169-31.032,162.169-31.032c18.019-5.005,30.031,9.009,30.031,23.815,0,14.225-11.011,19.23-24.025,23.965l-88.092,31.943c-8.008,3-21.022,9.009-26.027,18.2-6.006,10.761-5.005,29.561-2.1,47.64l5.906,29.661,37.449,164.071c2.8,13.164-6.307,25.466-19.42,27.769s-23.835-6.647-27.719-19.38l-37.6-116.051q-2.713-8.349-4.8-16.888L256.2,320.2l-5.306,21.673q-2.523,10.361-5.806,20.5L208.15,476.543c-4,12.863-14.515,21.773-27.629,19.48s-22.423-15.606-19.48-27.769l37.429-164Z" transform="translate(0 0.117)" fill="#fff" stroke="#d0cbcb" stroke-linejoin="round" stroke-width="19"/>
      </g>
    </g>
    <text id="about_me" data-name="about me" transform="translate(534 1165)" fill="#707070" font-size="40" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">about me</tspan></text>
    <g id="git-commit-outline" transform="translate(446.526 685.637) scale(1 0.375)" opacity="0.73">
      <ellipse id="Ellipse_20" data-name="Ellipse 20" cx="178.135" cy="96" rx="178.135" ry="96" transform="translate(255.824 160)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
      <path id="Path_288" data-name="Path 288" d="M255.824,256H48m771.917,0H612.093" transform="translate(0)" fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
    </g>
    <g id="desktop-outline" transform="translate(-31.804 -64)">
      <rect id="Rectangle_107" data-name="Rectangle 107" width="1366" height="1091" rx="32" transform="translate(31.805 64)" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/>
      <path id="Path_306" data-name="Path 306" d="M482.75,517.928,459.854,384H230.9L208,517.928Z" transform="translate(369.529 770.778)" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
      <path id="Path_307" data-name="Path 307" d="M868.721,448H144" transform="translate(208.542 840.543)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
      <path id="Path_308" data-name="Path 308" d="M32,304V440.771c.151,50.3,43.741,91.039,97.557,91.18H1300.247c53.817-.141,97.407-40.881,97.557-91.18V304ZM714.9,486.361c-26.94,0-48.779-20.411-48.779-45.59s21.839-45.59,48.779-45.59,48.779,20.411,48.779,45.59S741.842,486.361,714.9,486.361Z" transform="translate(0 623.161)"/>
    </g>
    <g id="game-controller-outline" transform="translate(45.994 1483.001)">
      <path id="Path_309" data-name="Path 309" d="M467.51,248.83c-18.4-83.18-45.69-136.24-89.43-149.17A91.5,91.5,0,0,0,352,96c-26.89,0-48.11,16-96,16s-69.15-16-96-16a99.09,99.09,0,0,0-27.2,3.66C89,112.59,61.94,165.7,43.33,248.83c-19,84.91-15.56,152,21.58,164.88,26,9,49.25-9.61,71.27-37,25-31.2,55.79-40.8,119.82-40.8s93.62,9.6,118.66,40.8c22,27.41,46.11,45.79,71.42,37.16,41.02-14.01,40.44-79.13,21.43-165.04Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/>
      <circle id="Ellipse_30" data-name="Ellipse 30" cx="20" cy="20" r="20" transform="translate(272 204)"/>
      <path id="Path_310" data-name="Path 310" d="M336,288a20,20,0,1,1,20-19.95A20,20,0,0,1,336,288Z"/>
      <circle id="Ellipse_31" data-name="Ellipse 31" cx="20" cy="20" r="20" transform="translate(316 160)"/>
      <circle id="Ellipse_32" data-name="Ellipse 32" cx="20" cy="20" r="20" transform="translate(360 204)"/>
      <path id="Path_311" data-name="Path 311" d="M160,176v96m48-48H112" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
    </g>
    <g id="desktop-outline-2" data-name="desktop-outline" transform="translate(-30.805 2477.12)">
      <rect id="Rectangle_107-2" data-name="Rectangle 107" width="1366" height="3535" rx="32" transform="translate(31.805 -59.12)" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/>
      <path id="Path_306-2" data-name="Path 306" d="M482.75,605.765,459.854,384H230.9L208,605.765Z" transform="translate(369.529 3091.115)" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
      <path id="Path_307-2" data-name="Path 307" d="M868.721,448H144" transform="translate(208.542 3248.88)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
      <path id="Path_308-2" data-name="Path 308" d="M32,304V470.324c.151,61.167,43.741,110.711,97.557,110.882H1300.247c53.817-.171,97.407-49.715,97.557-110.882V304ZM714.9,525.765c-26.94,0-48.779-24.822-48.779-55.441s21.839-55.441,48.779-55.441,48.779,24.822,48.779,55.441S741.842,525.765,714.9,525.765Z" transform="translate(0 2893.981)"/>
    </g>
    <g id="people-outline" transform="translate(167.013 1245.161)">
      <g id="game-controller-outline-2" data-name="game-controller-outline" transform="translate(542.981 237.84)">
        <path id="Path_309-2" data-name="Path 309" d="M467.51,248.83c-18.4-83.18-45.69-136.24-89.43-149.17A91.5,91.5,0,0,0,352,96c-26.89,0-48.11,16-96,16s-69.15-16-96-16a99.09,99.09,0,0,0-27.2,3.66C89,112.59,61.94,165.7,43.33,248.83c-19,84.91-15.56,152,21.58,164.88,26,9,49.25-9.61,71.27-37,25-31.2,55.79-40.8,119.82-40.8s93.62,9.6,118.66,40.8c22,27.41,46.11,45.79,71.42,37.16,41.02-14.01,40.44-79.13,21.43-165.04Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/>
        <circle id="Ellipse_30-2" data-name="Ellipse 30" cx="20" cy="20" r="20" transform="translate(272 204)"/>
        <path id="Path_310-2" data-name="Path 310" d="M336,288a20,20,0,1,1,20-19.95A20,20,0,0,1,336,288Z"/>
        <circle id="Ellipse_31-2" data-name="Ellipse 31" cx="20" cy="20" r="20" transform="translate(316 160)"/>
        <circle id="Ellipse_32-2" data-name="Ellipse 32" cx="20" cy="20" r="20" transform="translate(360 204)"/>
        <path id="Path_311-2" data-name="Path 311" d="M160,176v96m48-48H112" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
      </g>
      <path id="Path_17" data-name="Path 17" d="M516.885,304c-147.035,0-288.43,73.033-323.852,215.262-4.693,18.817,7.107,37.43,26.442,37.43H814.318c19.335,0,31.068-18.614,26.442-37.43C805.338,374.754,663.943,304,516.885,304Z" transform="translate(201.006 261.286)" fill="#fff" stroke="#afafaf" stroke-miterlimit="10" stroke-width="23"/>
      <path id="Path_16" data-name="Path 16" d="M568.081,258.445C561.47,350.2,493.4,420.89,419.173,420.89s-142.41-70.664-148.908-162.445C263.5,162.986,329.76,96,419.173,96S574.849,164.723,568.081,258.445Z" transform="translate(298.719 0)" fill="#fff" stroke="#afafaf" stroke-linecap="round" stroke-linejoin="round" stroke-width="23"/>
      <path id="Path_18" data-name="Path 18" d="M333.364,258.723C328.084,332,273.078,389.717,213.786,389.717S99.4,332.026,94.208,258.723C88.816,182.487,142.355,128,213.786,128S338.756,183.886,333.364,258.723Z" transform="translate(77.687 40.198)" fill="#fff" stroke="#afafaf" stroke-linecap="round" stroke-linejoin="round" stroke-width="23"/>
      <path id="Path_19" data-name="Path 19" d="M424.588,320.383c-40.724-18.659-85.577-25.833-133.115-25.833-117.321,0-230.356,58.322-258.671,171.921-3.723,15.026,5.708,29.894,21.14,29.894H307.266" transform="translate(0 249.415)" fill="#fff" stroke="#afafaf" stroke-linecap="round" stroke-miterlimit="10" stroke-width="23"/>
    </g>
    <g id="school-outline" transform="translate(120 2573)">
      <path id="Path_312" data-name="Path 312" d="M32,221.827,308.2,64l276.2,157.827L308.2,379.654Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="21"/>
      <path id="Path_313" data-name="Path 313" d="M112,251.185V409.012l177.555,98.642,177.555-98.642V251.185m98.642,157.827V192m-276.2,157.827V507.654" transform="translate(18.642 29.827)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="21"/>
    </g>
  </g>
</svg>



</body>

</html>

  `)
});




module.exports = router;
