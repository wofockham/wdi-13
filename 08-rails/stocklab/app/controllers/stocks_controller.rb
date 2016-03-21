class StocksController < ApplicationController
  def form
  end

  def lookup
    result = YahooFinance::get_quotes(
      YahooFinance::StandardQuote,
      params[:stock_symbol]
    )
    @price = result[params[:stock_symbol]].lastTrade
  end
end
