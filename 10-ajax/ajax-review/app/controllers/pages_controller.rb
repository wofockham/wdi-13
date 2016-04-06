class PagesController < ApplicationController
  def index
    @lotto = (1..40).to_a.sample 6
    @brother = %w{ Groucho Harpo Chico Zeppo Gummo }.sample
    @uptime = `uptime`
    @fortune = `fortune -a`
  end

  def info
    @lotto = (1..40).to_a.sample 6
    @brother = %w{ Groucho Harpo Chico Zeppo Gummo }.sample
    @uptime = `uptime`
    @fortune = `fortune -a`
    render :json => {
      :lotto => @lotto,
      :brother => @brother,
      :uptime => @uptime,
      :fortune => @fortune
    }
  end

  def lotto
    @lotto = (1..40).to_a.sample 6
    render :text => @lotto.join(', ')
  end

  def brother
    @brother = %w{ Groucho Harpo Chico Zeppo Gummo }.sample
    render :text => @brother
  end

  def uptime
    @uptime = `uptime`
    render :text => @uptime
  end

  def fortune
    @fortune = `fortune -a`
    render :text => @fortune
  end
end
