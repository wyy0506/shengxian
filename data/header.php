<?php
   header('Content-Type: text/html;charset=UTF-8');
?>
<!--页面顶部! -->
<!-- 1、页面顶部-->
<div id="top" class="row clear">
    <p class="lf">食行让生活更美好！</p>
    <div id="log-res" class="lf">
        <a href="#login" class="lf login" data-toggle="modal" data-target=".bs-example-modal-lg">
            请登录
        </a>
        <!--登录对话框-->
        <div class="modal bs-example-modal-lg" data-backdrop="static" id="login">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>用户登录</h4>
                    </div>
                    <div class="modal-body">
                        <form id="login-form">
                            <div class="form-group">
                                <label for="uname">用户名：</label>
                                <input type="text" class="form-control" placeholder="请输入登录用户名"
                                       name="uname" id="uname" value="tom">
                            </div>
                            <div class="form-group">
                                <label for="upwd">密码：</label>
                                <input type="password" class="form-control" placeholder="请输入登录密码"
                                       name="upwd" id="upwd" value="123456">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" id="btn-login">登录</button>
                        <button type="button" class="btn btn-success" data-dismiss="modal">
                            取消
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <a href="#" class="lf register">快速注册</a>
    </div>
    <div class="lf" id="city">
        <div id="city-box">
            <span>送货至：</span>
            <a href="#">苏州</a>
        </div>
        <ul id="city-items">
            <li id="a1">
                <a href="#" >苏州</a>
            </li>
            <li id="a2">
                <a href="#">上海</a>
            </li>
            <li id="a3">
                <a href="#">无锡</a>
            </li>
        </ul>
    </div>
    <div>
        <ul id="top-right" class="rt">
            <li>
                <a href="#">我的订单</a>
            </li>
            <li id="my-shihang">
                <b></b>
                <a href="#">我的食行</a>
                <div id="enter">
                    <div>
                        <a href="#">
                            <img src="images/defaultUserImage.jpg"/>
                        </a>
                        <a href="#">您好，请登录</a>
                        <p>账户余额</p>
                    </div>
                    <div  class="enter-box">
                        <ul>
                            <li>优惠券</li>
                            <li>我的收藏</li>
                        </ul>
                        <ul>
                            <li>待自提</li>
                            <li>待评价</li>
                        </ul>
                    </div>
                </div>
            </li>
            <li>
                <b></b>
                <a href="#">账户充值</a>
            </li>
            <li id="notice">
                <b></b>
                <a href="#">食行公告</a>
                <div class="notice-box">
                    <div>
                        <a href="#">每日检测结果查询</a>
                    </div>
                    <div>
                        <a href="#">食行生鲜发票申请调整公告</a>
                    </div>
                    <div>
                        <a href="#">关于取消订单规则调整的通知</a>
                    </div>
                    <div>
                        <a href="#">更多&gt&gt</a>
                    </div>
                </div>
            </li>
            <li id="service">
                <b></b>
                <a href="#">帮助中心</a>
                <ul class="service-box">
                    <li>
                        <a href="#">站点地图</a>
                    </li>
                    <li>
                        <a href="#">购物流程</a>
                    </li>
                    <li>
                        <a href="#">配送时间</a>
                    </li>
                    <li>
                        <a href="#">取货方式</a>
                    </li>
                    <li>
                        <a href="#">常见问题</a>
                    </li>
                    <li>
                        <a href="#">积分问题</a>
                    </li>
                    <li>
                        <a href="#">优惠券</a>
                    </li>
                    <li>
                        <a href="#">会员等级</a>
                    </li>
                    <li>
                        <a href="#">食材检测</a>
                    </li>
                    <li>
                        <a href="#">联系我们</a>
                    </li>
                </ul>
            </li>
            <li>
                <b></b>
                <a href="#">手机食行</a>
            </li>
            <li>
                <b></b>
                <a href="#">新手上路</a>
            </li>
        </ul>
    </div>
</div>
<!-- 2、logo和搜索框-->
<div id="top-main" class="row">
    <a href="#" class="lf">
        <img src="images/shihang_loge.png">
    </a>
    <div id="search">
        <input type="text" placeholder="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp搜索"/>
        <button type="submit">搜索</button>
    </div>
    <div id="my-shopping">
        <a href="#">
            <span class="glyphicon glyphicon-shopping-cart"></span>
            我的购物车
        </a>
        <div>
            <p>
                尊敬的用户，您还未登录，请先<a href="#" class="cart-login">登录</a>
            </p>
        </div>
    </div>
</div>
<!-- 3、主导航-->
<div id="nav" class="row">
    <div class="col-xs-2">
        <a href="#" class="product">
            <p>全部分类</p>
        </a>
    </div>
    <div class="col-xs-10">
        <ul class="lf">
            <li>
                <a href="#" class="index">首页</a><b>|</b>
            </li>
            <li>
                <a href="#">手机食行</a><b>|</b>
            </li>
            <li>
                <a href="#">企业采购</a><b>|</b>
            </li>
            <li>
                <a href="#">积分抽奖</a>
            </li>
        </ul>
    </div>
</div>