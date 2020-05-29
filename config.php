<?php include 'menu.php'; ?>
<script src="js/config.js"></script> <!-- MAIN CONTENT-->
<div class="main-content">
    <div class="section__content section__content--p30">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="overview-wrap">
                        <h2 class="title-1">Configurações</h2>
                        <!---<button class="au-btn au-btn-icon au-btn--blue"> <i class="zmdi zmdi-plus"></i>Novo RPA2Dev</button>--->
                    </div>
                </div>
            </div>
            <style>
                .icon {
                    color: #fff !important;
                    font-size: 24px;
                    margin-right: 10px;
                }

                .badge-primary {
                    background-color: #712682;
                    border-color: #712682;
                }
            </style>
            <div class="row m-t-25" id="divRPA">
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <strong>Adicionar/Remover Template</strong>
                        </div>
                        <div class="card-body card-block">
                            <form action="" method="post" class="form-horizontal">
                                <div class="row form-group">
                                    <div class="col col-md-3">
                                        <label for="hashid" class=" form-control-label">Hash Code</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <input type="email" id="hashid" name="hf-hashid" placeholder="ID do RPA2Dev ou IRPA" class="form-control">
                                        <span class="help-block">*Copie o código do seu RPA atráves da URL na tela de edição dele, através o parâmetro r=XXX</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary btn-sm" onclick="setTemplate('a')">
                                <i class="fa fa-dot-circle-o"></i> Adicionar
                            </button>
                            <button type="reset" class="btn btn-danger btn-sm" onclick="setTemplate('r')">
                                <i class="fa fa-ban"></i> Remover
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <strong>Segurança</strong>
                        </div>
                        <div class="card-body card-block">
                        <center><button class="au-btn au-btn-icon au-btn--blue" onclick="window.location='forgot-pass.php?u=<?php echo $_GET['u']?>'"> <i class="zmdi zmdi-key"></i>Alterar Senha</button></center>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="copyright">
                        <p>Copyright ?2020 Lab2Dev. All rights reserved. Template by <a href="https://www.lab2dev.com">Lab2Dev</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>