<template>

    <div>
    <nav-bar />

    <div class="main">

        <page-header
            title="Sale Invoice Page"
            subtitle="Rapidiously deploy world-class platforms whereas collaborative interfaces. Phosfluorescently facilitate corporate."
        />

        <breadcrumb :crumbs="crumbs" />

        <!--sale page start-->
        <section class="sale-page-wrap ptb-100">
            <div class="container">
                <div class="row register">
                    <div class="col-lg-8 col-md-7 col-12">
                        <div id="itemForm" class="sale-invoice-wrap mb-4">
                            <form action="#" id="add_item_form" class="sale-invoice-form" autocomplete="off" method="post" accept-charset="utf-8">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Enter Item Name Or Search" aria-label="Recipient's username" aria-describedby="button-addon2">
                                    <div class="input-group-append">
                                        <button class="btn btn-brand-01" type="button" id="button-addon2">Add Item</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="register-box register-items paper-cut mb-sm-4">
                            <div class="register-items-holder">
                                <table id="register" class="table table-responsive-lg">

                                    <thead>
                                        <tr class="register-items-header">
                                            <th>Item Name</th>
                                            <th>Price</th>
                                            <th>Qty.</th>
                                            <th>Disc %</th>
                                            <th>Total</th>
                                            <th class="text-right"> Update</th>
                                        </tr>
                                    </thead>

                                    <tbody class="register-item-content">
                                        <tr class="register-item-details">
                                            <td>Jelly</td>
                                            <td>$55.06</td>
                                            <td>1</td>
                                            <td>0%</td>
                                            <td>$55.06</td>
                                            <td class="text-right"><a href="#"><i class="far fa-times-circle"></i></a></td>
                                        </tr>
                                        <tr class="register-item-details">
                                            <td>Apples</td>
                                            <td>$64.06</td>
                                            <td>1</td>
                                            <td>0%</td>
                                            <td>$64.06</td>
                                            <td class="text-right"><a href="#"><i class="far fa-times-circle"></i></a></td>
                                        </tr>
                                        <tr class="register-item-details">
                                            <td>Bing Cherry</td>
                                            <td>$45.06</td>
                                            <td>1</td>
                                            <td>0%</td>
                                            <td>$45.06</td>
                                            <td class="text-right"><a href="#"><i class="far fa-times-circle"></i></a></td>
                                        </tr>
                                        <tr class="register-item-details">
                                            <td>Damson Plum</td>
                                            <td>$14.06</td>
                                            <td>1</td>
                                            <td>0%</td>
                                            <td>$14.06</td>
                                            <td class="text-right"><a href="#"><i class="far fa-times-circle"></i></a></td>
                                        </tr>
                                        <tr class="register-item-details">
                                            <td>Cucumbers</td>
                                            <td>$45.06</td>
                                            <td>1</td>
                                            <td>0%</td>
                                            <td>$45.06</td>
                                            <td class="text-right"><a href="#"><i class="far fa-times-circle"></i></a></td>
                                        </tr>
                                        <tr class="register-item-details">
                                            <td>Jelly</td>
                                            <td>$55.06</td>
                                            <td>1</td>
                                            <td>0%</td>
                                            <td>$55.06</td>
                                            <td class="text-right"><a href="#"><i class="far fa-times-circle"></i></a></td>
                                        </tr>
                                        <tr class="register-item-details">
                                            <td>Apples</td>
                                            <td>$64.06</td>
                                            <td>1</td>
                                            <td>0%</td>
                                            <td>$64.06</td>
                                            <td class="text-right"><a href="#"><i class="far fa-times-circle"></i></a></td>
                                        </tr>
                                        <tr class="register-item-details">
                                            <td>Bing Cherry</td>
                                            <td>$45.06</td>
                                            <td>1</td>
                                            <td>0%</td>
                                            <td>$45.06</td>
                                            <td class="text-right"><a href="#"><i class="far fa-times-circle"></i></a></td>
                                        </tr>
                                        <tr class="register-item-details">
                                            <td>Cucumbers</td>
                                            <td>$45.06</td>
                                            <td>1</td>
                                            <td>0%</td>
                                            <td>$45.06</td>
                                            <td class="text-right"><a href="#"><i class="far fa-times-circle"></i></a></td>
                                        </tr>
                                        <tr class="register-item-details">
                                            <td>Jelly</td>
                                            <td>$55.06</td>
                                            <td>1</td>
                                            <td>0%</td>
                                            <td>$55.06</td>
                                            <td class="text-right"><a href="#"><i class="far fa-times-circle"></i></a></td>
                                        </tr>
                                        <tr class="register-item-details">
                                            <td>Jelly</td>
                                            <td>$55.06</td>
                                            <td>1</td>
                                            <td>0%</td>
                                            <td>$55.06</td>
                                            <td class="text-right"><a href="#"><i class="far fa-times-circle"></i></a></td>
                                        </tr>
                                        <tr class="register-item-details">
                                            <td>Apples</td>
                                            <td>$64.06</td>
                                            <td>1</td>
                                            <td>0%</td>
                                            <td>$64.06</td>
                                            <td class="text-right"><a href="#"><i class="far fa-times-circle"></i></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-5 col-12">
                        <div class="customer-wrap mb-4">
                            <div class="customer-info">
                                <div class="media align-items-center">
                                    <img class="mr-3 img-fluid rounded-circle w-25" src="assets/img/client/4.jpg" alt="customer">
                                    <div class="media-body">
                                        <h5 class="mb-1">Client Name</h5>
                                        <p>ThemeTags</p>
                                    </div>
                                </div>
                            </div>
                            <div class="customer-action">
                                <ul class="list-inline customer-action-list">
                                    <li class="list-inline-item"><a href="#"><i class="fas fa-car"></i> Delivery</a></li>
                                    <li class="list-inline-item"><a href="#"><i class="fas fa-envelope"></i> Email</a></li>
                                    <li class="list-inline-item"><a href="#"><i class="fas fa-times-circle"></i> Detach</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="order-form-wrap mb-4">
                            <div class="order-list-wrap">
                                <ul class="order-summary-list">
                                    <li class="summary-list-item">
                                        <span class="pull-left">Discount all items by Percent:</span>
                                        <span class="pull-right">$15.24%</span>
                                    </li>
                                    <li class="summary-list-item">
                                        <span class="pull-left">Discount Entire Sale:</span>
                                        <span class="pull-right">$15.00</span>
                                    </li>
                                    <li class="summary-list-item">
                                        <span class="pull-left">Discount Reason:</span>
                                        <span class="pull-right">Holiday Vacation</span>
                                    </li>
                                    <li class="summary-list-item sub-total">
                                        <span class="pull-left">Sub Total:</span>
                                        <span class="pull-right">$925.00</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="total-amount-wrap">
                                <div class="total-amount">
                                    <h5 class="mb-0">Total</h5>
                                    <span class="total">
                                        $12526.50
                                    </span>
                                </div>
                                <div class="total-amount amount-due">
                                    <h5 class="mb-0">Amount Due</h5>
                                    <span class="total due">
                                        $12526.50
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="add-payment-wrap">
                            <h5 class="h6">Add Payment</h5>
                            <ul class="add-payment-list list-inline">
                                <li class="list-inline-item py-2"><a href="#" class="btn btn-xs btn-brand-01">Cash</a></li>
                                <li class="list-inline-item py-2"><a href="#" class="btn btn-xs btn-outline-brand-01">Gift Card</a></li>
                                <li class="list-inline-item py-2"><a href="#" class="btn btn-xs btn-outline-brand-01">Debit Card</a></li>
                            </ul>
                            <form action="#" class="add-payment-form" autocomplete="off" method="post" accept-charset="utf-8">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Total Amount" aria-describedby="addPay">
                                    <div class="input-group-append">
                                        <button class="btn btn-brand-02" type="button" id="addPay">Add Payment</button>
                                    </div>
                                </div>
                            </form>
                            <textarea name="comment" cols="40" rows="2" id="comment" class="form-control mt-3" data-title="Comments" placeholder="Comments"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--sale page end-->

    </div>
    <site-footer />
    <copyright />
    </div>

</template>
<script>
    import NavBar from "../views/commons/NavBar";
    import PageHeader from "../views/commons/PageHeader";
    import SiteFooter from "../views/commons/SiteFooter";
    import Copyright from "../views/commons/Copyright";
    import Breadcrumb from "../views/commons/Breadcrumb";

    export default {
        name: 'SaleInvoice',
        components: { Breadcrumb, SiteFooter, PageHeader, NavBar, Copyright },
        data: function(){
            return {
                crumbs: [
                    { 'link': '#', 'name': 'Home', 'isActive': false },
                    { 'link': '#', 'name': 'Pages', 'isActive': false },
                    { 'link': '#', 'name': 'Sale Invoice', 'isActive': true }
                ]
            }
        }
    }
</script>