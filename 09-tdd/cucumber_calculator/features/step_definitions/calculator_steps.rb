Given(/^I have a calculator$/) do
  @calculator = Calculator.new
end

Given(/^I have the number (\d+)$/) do |number|
  @calculator << number
end

When(/^I add them together$/) do
  pending # Write code here that turns the phrase above into concrete actions
end

Then(/^I should see (\d+) in the terminal$/) do |arg1|
  pending # Write code here that turns the phrase above into concrete actions
end
