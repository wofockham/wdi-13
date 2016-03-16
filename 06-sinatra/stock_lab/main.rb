require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

get '/' do
  erb :home
end

get '/stock' do
  @symbol = params[:stock_symbol]
  @result = YahooFinance::get_quotes( YahooFinance::StandardQuote, @symbol )

  @last_trade = @result[ @symbol ].lastTrade

  erb :stock
end
