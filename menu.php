﻿<!DOCTYPE html> 
<html lang="en">
   <head>
      <!-- Required meta tags--> 
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="description" content="au theme template">
      <meta name="author" content="Hau Nguyen">
      <meta name="keywords" content="au theme template">
      <!-- Title Page--> 
      <title>Dashboard</title>
      <!-- Fontfaces CSS--> 
      <link href="css/font-face.css" rel="stylesheet" media="all">
      <link href="vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all">
      <link href="vendor/font-awesome-5/css/fontawesome-all.min.css" rel="stylesheet" media="all">
      <link href="vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all">
      <!-- Bootstrap CSS--> 
      <link href="vendor/bootstrap-4.1/bootstrap.min.css" rel="stylesheet" media="all">
      <!-- Vendor CSS--> 
      <link href="vendor/animsition/animsition.min.css" rel="stylesheet" media="all">
      <link href="vendor/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet" media="all">
      <link href="vendor/wow/animate.css" rel="stylesheet" media="all">
      <link href="vendor/css-hamburgers/hamburgers.min.css" rel="stylesheet" media="all">
      <link href="vendor/slick/slick.css" rel="stylesheet" media="all">
      <link href="vendor/select2/select2.min.css" rel="stylesheet" media="all">
      <link href="vendor/perfect-scrollbar/perfect-scrollbar.css" rel="stylesheet" media="all">
      <!-- Main CSS--> 
      <link href="css/theme.css" rel="stylesheet" media="all">
   </head>
   <body class="animsition">
      <div class="page-wrapper">
      <!-- HEADER MOBILE--> 
      <header class="header-mobile d-block d-lg-none">
         <div class="header-mobile__bar">
            <div class="container-fluid">
               <div class="header-mobile-inner"> <a class="logo" href="index.html"> <img src="images/icon/logo.png" alt="CoolAdmin" /> </a> <button class="hamburger hamburger--slider" type="button"> <span class="hamburger-box"> <span class="hamburger-inner"></span> </span> </button> </div>
            </div>
         </div>
         <nav class="navbar-mobile">
            <div class="container-fluid">
               <ul class="navbar-mobile__list list-unstyled">
                  <li class="has-sub"> <a href="team.php?u=<?php echo $_GET['u']?>"> <i class="fa fa-users"></i>Team Lab2Dev</a> </li>
                  <li> <a href="templates.php?u=<?php echo $_GET['u']?>"> <i class="fa fa-archive"></i>Templates</a> </li>
                  <li> <a href="myrpa2dev.php?u=<?php echo $_GET['u']?>"> <i class="fa fa-wrench"></i>Meus RPA2Dev</a> </li>
                  <li> <a href="rpa2devstudio.php?u=<?php echo $_GET['u']?>"> <i class="fa fa-flask"></i>RPA2Dev Studio</a> </li>
                  <li> <a href="#.html"> <i class="fas fa-cogs"></i>Configurações</a> </li>
                  <li> <a href="login.php"> <i class="fas fa-power-off"></i>Logout</a> </li>
               </ul>
            </div>
         </nav>
      </header>
      <!-- END HEADER MOBILE--> <!-- MENU SIDEBAR--> 
      <aside class="menu-sidebar d-none d-lg-block">
         <div class="logo"> <a href="#"> <img src="images/icon/logo.png" alt="Cool Admin" /> </a> </div>
         <div class="menu-sidebar__content js-scrollbar1">
            <nav class="navbar-sidebar">
               <ul class="list-unstyled navbar__list">
                  <li class="has-sub"> <a href="team.php?u=<?php echo $_GET['u']?>"> <i class="fa fa-users"></i>Team Lab2Dev</a> </li>
                  <li> <a href="templates.php?u=<?php echo $_GET['u']?>"> <i class="fa fa-archive"></i>Templates</a> </li>
                  <li>
                     <a class="js-arrow" href="#"> <i class="fas fa-wrench"></i>Meus RPAs <span class="arrow" style="float:right"> <i class="fas fa-angle-down"></i> </span> </a> 
                     <ul class="list-unstyled navbar__sub-list js-sub-list">
                        <li> <a href="myrpa2dev.php?u=<?php echo $_GET['u']?>"> <i class="fa fa-cube"></i>RPA2Dev</a> </li>
                        <li> <a href="myirpa.php?u=<?php echo $_GET['u']?>"> <i class="fa fa-gem"></i>SAP-IRPAs</a> </li>
                     </ul>
                  </li>
                  <li> <a href="rpa2devstudio.php?u=<?php echo $_GET['u']?>"> <i class="fa fa-flask"></i>RPA2Dev Studio</a> </li>
                  <li> <a href="config.php?u=<?php echo $_GET['u']?>"> <i class="fas fa-cogs"></i>Configurações</a> </li>
                  <li> <a href="login.php"> <i class="fas fa-power-off"></i>Logout</a> </li>
               </ul>
            </nav>
         </div>
      </aside>
      <!-- END MENU SIDEBAR--> <!-- PAGE CONTAINER--> 
      <div class="page-container">
      <!-- HEADER DESKTOP--> 
      <header class="header-desktop">
         <div class="section__content section__content--p30">
            <div class="container-fluid">
               <div class="header-wrap" style="float: right;">
                  <div class="header-button">
                     <div class="account-wrap" style="float:right">
                        <div class="account-item clearfix js-item-menu">
                           <div class="image"> <img src="images/icon/avatar-01.png" alt="User Lab2Dev" /> </div>
                           <div class="content"> <a class="js-acc-btn nomeUser" href="#"></a> </div>
                           <div class="account-dropdown js-dropdown">
                              <div class="info clearfix">
                                 <div class="image"> <a href="#"> <img src="images/icon/avatar-01.png" alt="User Lab2Dev" /> </a> </div>
                                 <div class="content">
                                    <h5 class="name"> <a href="#" class="nomeUser"></a> </h5>
                                    <span class="email emailUser"></span> 
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
      <!-- HEADER DESKTOP--> <!-- END PAGE CONTAINER--> <script src="vendor/jquery-3.2.1.min.js"></script> <!-- Bootstrap JS--> <script src="vendor/bootstrap-4.1/popper.min.js"></script> <script src="vendor/bootstrap-4.1/bootstrap.min.js"></script> <!-- Vendor JS --> <script src="vendor/slick/slick.min.js"> </script> <script src="vendor/wow/wow.min.js"></script> <script src="vendor/animsition/animsition.min.js"></script> <script src="vendor/bootstrap-progressbar/bootstrap-progressbar.min.js"> </script> <script src="vendor/counter-up/jquery.waypoints.min.js"></script> <script src="vendor/counter-up/jquery.counterup.min.js"> </script> <script src="vendor/circle-progress/circle-progress.min.js"></script> <script src="vendor/perfect-scrollbar/perfect-scrollbar.js"></script> <script src="vendor/chartjs/Chart.bundle.min.js"></script> <script src="vendor/select2/select2.min.js"> </script> <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> <!-- Main JS--> <script src="js/main.js"></script> <script src="js/menu.js"></script> 
   </body>
</html>
<!-- end document-->