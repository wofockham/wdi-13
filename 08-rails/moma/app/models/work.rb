# == Schema Information
#
# Table name: works
#
#  id         :integer          not null, primary key
#  title      :text
#  year       :text
#  medium     :text
#  style      :text
#  image      :text
#  created_at :datetime
#  updated_at :datetime
#

class Work < ActiveRecord::Base
end
