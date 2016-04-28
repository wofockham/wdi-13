# == Schema Information
#
# Table name: fruits
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :text
#  type       :string
#  shelf_id   :integer
#

class Pear < Fruit
end
