const Payment = () => {
    return (
        <>
            <h1>Payment</h1>

            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="ADRKL22ULFZHS" />
                <table>
                    <tr><td><input type="hidden" name="on0" value="Adult Tickets" />Adult Tickets</td></tr><tr><td><select name="os0">
                        <option value="One Adult Ticket">One Adult Ticket £8.30 GBP</option>
                        <option value="Two Adult Tickets">Two Adult Tickets £16.60 GBP</option>
                        <option value="Three Adult Tickets">Three Adult Tickets £24.90 GBP</option>
                        <option value="Four Adult Tickets">Four Adult Tickets £33.20 GBP</option>
                    </select> </td></tr>
                </table>
                <input type="hidden" name="currency_code" value="GBP" />
                <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
            </form>

            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="F82WH4MAMA36N" />
                <table>
                    <tr><td><input type="hidden" name="on0" value="Child Tickets" />Child Tickets</td></tr><tr><td><select name="os0">
                        <option value="One Child Ticket">One Child Ticket £4.30 GBP</option>
                        <option value="Two Children Tickets">Two Children Tickets £8.60 GBP</option>
                        <option value="Three Children Tickets">Three Children Tickets £12.90 GBP</option>
                        <option value="Four Children Tickets">Four Children Tickets £17.20 GBP</option>
                    </select> </td></tr>
                </table>
                <input type="hidden" name="currency_code" value="GBP" />
                <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
            </form>

            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="46CRS6DHQ42FW" />
                <table>
                    <tr><td><input type="hidden" name="on0" value="Promotions" />Promotions</td></tr><tr><td><select name="os0">
                        <option value="Family Ticket (Two Adults + Children Go Free)">Family Ticket (Two Adults + Children Go Free) £16.60 GBP</option>
                        <option value="Concession (Over 60s and Students)">Concession (Over 60s and Students) £5.50 GBP</option>
                        <option value="Izakaya Monji Promotion (See Places To Go for more info)">Izakaya Monji Promotion (See Places To Go for more info) £6.64 GBP</option>
                        <option value="Kukansha Promotion (See Places To Go for more info)">Kukansha Promotion (See Places To Go for more info) £2.15 GBP</option>
                    </select> </td></tr>
                </table>
                <input type="hidden" name="currency_code" value="GBP" />
                <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
            </form>

            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----" />
                <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_viewcart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
            </form>
        </>
    );
}

export default Payment;