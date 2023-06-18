var express = require('express');
var router = express.Router();

/* GET exp. */
router.get('/', function(req, res, next) {
  // res.render('index', {});
  res.send
  (`

  <!DOCTYPE html>
<html>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
<head>

    <style>
        body {
            margin: 0;
            font-family: 'Roboto', sans-serif;
            font-size: large;
        }
        #fullpage {


        }

        .section {
            /* margin-top: 1rem; */
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            /* overflow: hidden; */
        }

        h1, h2 {
            color: #333;
            text-align: center;
        }

        #work {
            position: fixed;
            fill: #EFE3CC;
            position: fixed;
            top: 0;
            right: 10px;
            z-index: 9;
            height: 21rem;
            width: 21rem;
        }

        #close-outline {
            position: fixed;
            top: 0;
            z-index: 9;
            height: 21rem;
            width: 21rem;
            stroke: #e9e9e9
        }

        #close-outline :hover {
            fill: #333;
            stroke: #333;

        }

        /* accordion */

        .accordion {
      overflow: hidden;
      margin: 5rem;
      text-align: center;
    }

    
    .accordion-title {
      display: block;
      padding: 10px;
      background-color: #f5f5f5;
      cursor: pointer;
      transition: background-color 0.3s ease;
      margin: 0;
    }
    .accordion-title:hover {
      background-color: #eaeaea;
    }
    
    .accordion-content {
      padding: 0 10px;
      background-color: #fff;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
      display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: left;
    
    }
    .accordion-content img {
        width: 12rem;
    margin: 1rem;

    }
    
    .accordion-item.active .accordion-content {
      max-height: 500px; /* Adjust the value to fit your content */
      transition: max-height 0.5s ease;
  
    }

        @media only screen and (max-width: 600px) {

  #close-outline {
    height: 10rem;
            width: 10rem;
    }
    #work {
            height: 10rem;
            width: 10rem;
        }
}
@media only screen and (max-width: 450px) {
    .accordion {
      margin: 2rem;

    }

    .accordion-content img {
        width: 7rem;
    margin: 1rem;

    }
    .beyond_desc {
        max-height: 450px; 
        overflow-y: scroll;
    }
}
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.css" />
</head>

<body>
    <svg id="close-outline" stroke-miterlimit="10"
        style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" version="1.1"
        viewBox="0 0 24 24" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
        xmlns:vectornator="http://vectornator.io" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs />
         <g id="Untitled" vectornator:layerName="Untitled">
         <a href="/" ><path
                d="M18.3 5.71C17.91 5.32 17.28 5.32 16.89 5.71L12 10.59L7.11 5.7C6.72 5.31 6.09 5.31 5.7 5.7C5.31 6.09 5.31 6.72 5.7 7.11L10.59 12L5.7 16.89C5.31 17.28 5.31 17.91 5.7 18.3C6.09 18.69 6.72 18.69 7.11 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.11C18.68 6.73 18.68 6.09 18.3 5.71Z"
                fill="#e9e9e9" fill-rule="nonzero" opacity="1" /></a>
        </g>
    </svg>
    <div id="fullpage">
        <div class="section">
    
            <div class="accordion"  >
                <div style="text-align: right; margin: 1rem 0 2rem;">
                    <img src="./logos/beyond.png" alt="Beyond Limits AI" style="width: 12rem; margin: auto;"> 
                </div>
 
                <h1 style="text-align: right;">Software Engineer</h1>
                <!-- <h2>Beyond Limits AI</h2> -->
                <div class="accordion-item">

                  <h3 class="accordion-title">Contributions</h3>
                  <div class="accordion-content" >
                        <ul class="beyond_desc">
                            <li>Developed data streaming microservice using Scala and Apache Kafka to collect and store data
                                utilized by the frontend and reasoner microservice.</li>
                            <li>Redesigned the data ingestion process for “the formulation advisor“ to use a message queue to
                                improve overall system reliability:
                                <ul>
                                    <li>Used Redis to cache communications between actors allowing a more granule access during
                                        the ingestion process allowing for modification while data was in flight. </li>
                                </ul>
                            </li>
                            <li>Collaborated across products to define and roadmap a data agnostic asset management microservice
                                using Spring Boot framework.
                            </li>
                            <li>Added automated testing to the CI/CD process on Bitbucket Pipelines:
                                <ul>
                                    <li>Created base docker images with SBT, Scala, and a pre-seeded Neo4j database for testing
                                        environments with utility scripts to aid in the automated testing processes.</li>
                                    <li>Configured Bitbucket Pipelines to connect test results/coverage reports to SonarCloud.
                                    </li>
                                </ul>
                            </li>
                            <li>Implemented parallel querying for large data sets in a thread safe manner using Scala Futures.
                            </li>
                            <li>Added product wide feature flags allowing easier multi-tenant customization.
                            </li>
                        </ul>
                  </div>
                </div>
                <div class="accordion-item">
                  <h3 class="accordion-title">Languages</h3>
                  <div class="accordion-content">
                    <img src="./logos/java.png" alt="Java">
                    <img src="./logos/scala.png" alt="Scala">
                    <img src="./logos/python.png" alt="Python">
                  </div>
                </div>
                <div class="accordion-item">
                  <h3 class="accordion-title">Frameworks</h3>
                  <div class="accordion-content">
                    <img src="./logos/springboot.jpeg" alt="Spring Boot">
                    <img src="./logos/akka.png" alt="Akka">
                    <img src="./logos/fast.png" alt="FastAPI">
                    <img src="./logos/kafka.png" alt="Kafka">

                  </div>
                </div>
                <div class="accordion-item">
                  <h3 class="accordion-title">Storage</h3>
                  <div class="accordion-content">
                    <img src="./logos/neo4j.png" alt="Neo4j">
                    <img src="./logos/redis.png" alt="Redis" >
                    <img src="./logos/postgres.png" alt="Postgres">

                  </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-title">CI/CD</h3>
                    <div class="accordion-content">
                        <img src="./logos/aws.png" alt="AWS">
                        <img src="./logos/bitbucket.png" alt="Bitbucket">
                        <img src="./logos/docker.png" alt="Docker">
                        <img src="./logos/kubernetes.png" alt="Kubernetes">
                        <img src="./logos/sonar.png" alt="SonarCloud">
                        <img src="./logos/prometh.png" alt="Prometheus">
  
                    </div>
                  </div>
              </div>
        </div>
        <div class="section">
            <div class="accordion"  >
                <div style="text-align: right; margin: 1rem 0 2rem;">
                    <img src="./logos/yahm.png" alt="Yahm llc" style="width: 12rem; margin: auto;"> 
                </div>
 
                <h1 style="text-align: right;">Software Engineer</h1>
                <!-- <h2>Beyond Limits AI</h2> -->
                <div class="accordion-item">

                  <h3 class="accordion-title">Contributions</h3>
                  <div class="accordion-content" >
                        <ul class="beyond_desc">
                            <li>Developed tools to optimize workflow, improve customer experience, and recommend promotions.</li>
                            <li>Facilitated the transition of 50+ SoCal small businesses to the online-only world of Covid. Designed / updated websites and digital assets, created marketing plans and promotional material.
                            </li>
                            <li>Built internal tools for medical office using Angular 10 and Expressjs on GCP meeting HIPAA compliance: Employed multi-tier access controls, version tracking and auditing with Firebase.
                            </li>
                           
                        </ul>
                  </div>
                </div>
                <div class="accordion-item">
                  <h3 class="accordion-title">Languages</h3>
                  <div class="accordion-content">
                    <img src="./logos/web.png" alt="Web">
                    <img src="./logos/python.png" alt="Python">
                  </div>
                </div>
                <div class="accordion-item">
                  <h3 class="accordion-title">Frameworks</h3>
                  <div class="accordion-content">
                    <img src="./logos/angular.png" alt="Angular">
                    <img src="./logos/firebase.png" alt="Firebase">
                    <img src="./logos/express.png" alt="Express">
                    <img src="./logos/node.png" alt="Node">
                    <img src="./logos/twilio.png" alt="Twilio">
                    <img src="./logos/sendgrid.png" alt="SendGrid">
                    <img src="./logos/stripe.png" alt="Stripe">
                  </div>
                </div>
                <div class="accordion-item">
                  <h3 class="accordion-title">Storage</h3>
                  <div class="accordion-content">
                    <img src="./logos/cloud_firestore.png" alt="Cloud Firestore">
                    <img src="./logos/postgres.png" alt="Postgres">

                  </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-title">CI/CD</h3>
                    <div class="accordion-content">
                        <img src="./logos/gcp.png" alt="GCP">
                        <img src="./logos/github.png" alt="Github">
  
                    </div>
                  </div>
              </div>
        </div>
        <div class="section">
            <div class="accordion"  >
                <div style="text-align: right; margin: 1rem 0 2rem;">
                    <img src="./logos/gg.png" alt="Go Green Parking" style="width: 12rem; margin: auto;"> 
                </div>
 
                <h1 style="text-align: right;">Software Engineer</h1>
                <!-- <h2>Beyond Limits AI</h2> -->
                <div class="accordion-item">

                  <h3 class="accordion-title">Contributions</h3>
                  <div class="accordion-content" >
                        <ul class="beyond_desc">
                            <li>Converted company subscription base to Stripe integrating Stripe’s web APIs in the existing PHP platform. Negotiated better rates and saved ~0.6% on all transactions.</li>
                            
                            <li>Developed a simple inhouse DocuSign alternative using Angular, Canvas Web API, Firebase and Twillio/Send Grid Rest API to reduce dependence on outside services decreasing spend by $10k/year.
                            </li>

                            <li>Developed a lead generation system in collaboration with Pirelli Tires to capitalize on the existing foot traffic. Utilized TredSpec tire scanning hardware and REST API to create customer tire profiles. 
                            </li>
                            <li>Developed a voucher system in with Westfield Topanga allowing mall retailers to gift services to customers.
                            </li>
                            <li>Created marketing material for the company’s rebranding.
                            </li>
                        </ul>
                  </div>
                </div>
                <div class="accordion-item">
                  <h3 class="accordion-title">Languages</h3>
                  <div class="accordion-content">
                    <img src="./logos/web.png" alt="Web">
                    <img src="./logos/php.png" alt="PHP">
                  </div>
                </div>
                <div class="accordion-item">
                  <h3 class="accordion-title">Frameworks</h3>
                  <div class="accordion-content">
                    <img src="./logos/angular.png" alt="Angular">
                    <img src="./logos/firebase.png" alt="Firebase">
                    <img src="./logos/twilio.png" alt="Twilio">
                    <img src="./logos/sendgrid.png" alt="SendGrid">
                    <img src="./logos/stripe.png" alt="Stripe">
                  </div>
                </div>
                <div class="accordion-item">
                  <h3 class="accordion-title">Storage</h3>
                  <div class="accordion-content">
                    <img src="./logos/cloud_firestore.png" alt="Cloud Firestore">
                    <img src="./logos/postgres.png" alt="Postgres">

                  </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-title">CI/CD</h3>
                    <div class="accordion-content">
                        <img src="./logos/github.png" alt="Github">
                        <img src="./logos/gcp.png" alt="GCP">
  
                    </div>
                  </div>
              </div>
        </div>
    </div>
    <!-- accordion -->
    <script>
    // Add click event listeners to the accordion titles
    const accordionTitles = document.querySelectorAll('.accordion-title');

    accordionTitles.forEach(title => {
      title.addEventListener('click', function () {
        const currentAccordionItem = this.parentNode;
        const isActive = currentAccordionItem.classList.contains('active');

        // Close the previously opened section
        const activeAccordionItem = document.querySelector('.accordion-item.active');
        if (activeAccordionItem && activeAccordionItem !== currentAccordionItem) {
          activeAccordionItem.classList.remove('active');
        }

        // Toggle the clicked section
        currentAccordionItem.classList.toggle('active', !isActive);
      });
    });
      </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.js"></script>
    <script>
        new fullpage('#fullpage', {
            navigation: true,
            scrollBar: true,
            responsiveHeight: 600 // Adjust this value as needed
        });
    </script>
</body>

</html>


  `)
});




module.exports = router;
