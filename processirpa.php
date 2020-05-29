<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
   include 'menu.php';
   ?>
<?php

if($_POST['hdnedit'] == 'true' && empty($_FILES["userfile"]["name"])){
    $newfilename = $_POST['name_file'];
}else{
    $uploaddir = '/wamp64/www/RPA2DEV/upload/irpa/';
    $temp = explode(".", $_FILES["userfile"]["name"]);
    $newfilename = round(microtime(true)) . '_' .$temp[0]. '.' . end($temp);
    $uploadfile = $uploaddir . $newfilename;
    if (move_uploaded_file($_FILES['userfile']['tmp_name'] , $uploadfile)) {
        //echo "Arquivo válido e enviado com sucesso.\n";
    } else {
        //echo "Possível ataque de upload de arquivo!\n";
    }
}
?> 
<script src="js/irpasave.js"></script>
<script>
    
    salvarRPA(
        "<?php echo $_POST['txtnome']?>",
        "<?php echo preg_replace( "/\r|\n/", "<br>",$_POST['txtdesc'])?>",
        "<?php echo $_GET['u']?>",
        "<?php echo $_POST['txtprojeto']?>",
        <?php if($_POST['hdnpublic'] == 'true'){echo 1;}else{echo 0;}?>,
        "<?php echo $newfilename?>",
        <?php echo $_POST['hdnedit']?>,
        "<?php echo $_POST['hdnirpa']?>");
</script>