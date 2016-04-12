require 'test_helper'

class SecretsControllerTest < ActionController::TestCase
  setup do
    @secret = secrets(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:secrets)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create secret" do
    assert_difference('Secret.count') do
      post :create, secret: { content: @secret.content }
    end

    assert_redirected_to secret_path(assigns(:secret))
  end

  test "should show secret" do
    get :show, id: @secret
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @secret
    assert_response :success
  end

  test "should update secret" do
    patch :update, id: @secret, secret: { content: @secret.content }
    assert_redirected_to secret_path(assigns(:secret))
  end

  test "should destroy secret" do
    assert_difference('Secret.count', -1) do
      delete :destroy, id: @secret
    end

    assert_redirected_to secrets_path
  end
end
