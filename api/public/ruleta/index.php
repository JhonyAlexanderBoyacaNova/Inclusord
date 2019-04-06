<?php include '../../config/app.php'; ?>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<title>Ruleta</title>
	<script src="<?php echo $url?>/resources/assets/js/TweenMax.min.js"></script>
	<script src="<?php echo $url?>/resources/assets/js/Winwheel.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" >
<link rel="stylesheet" href="<?php echo $url;?>/resources/assets/css/style.css">
</head>
<body>
 <br />
 <br />


   <div class="ruleta">
    <canvas id='canvas' height="470" width="600"></canvas>
      <div class="options">
        <a onclick="miRuleta.startAnimation();" class="btn-start">
          <img src="https://rxconcile.com/wp-content/themes/rxconcile/assets/img/playButton.png">
        </a>
        <a onclick="restart();" class="btn-reload">
          <img src="https://d2gg9evh47fn9z.cloudfront.net/thumb_COLOURBOX5721291.jpg">
        </a>
     </div>
 </div>

<div class="modal fade" id="record-modal" >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <div class="img-letter">
          <img src="">
        </div>
        <div class="row">
           <div class="col-xs-12 col-md-6">
            <div class="video-letter">
              <video src="" controls="controls"></video>
              <p class="text-center"></p>
            </div>
          </div>
          <div class="col-xs-12 col-md-6">
            <div class="video-word">
              <video src="" controls="controls"></video>
              <p></p>
            </div>
          </div>
           <div class="col-xs-12 col-md-12">
            <div class="options text-center">
              <a href="#" class="btn btn-danger" onclick="nextStep('0')">Cancelar</a>
              <a href="#" class="btn btn-success" onclick="nextStep('1')">Continuar</a>
            </div>
          </div>
        </div>
         
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->






 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
 <script src="<?php echo $url?>/resources/assets/js/controlller/ruletaController.js"></script>
 <script>
   window.onload = function(){
    $(".ring").hide();
   }
 </script>
</body>
</html>