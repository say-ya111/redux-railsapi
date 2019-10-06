class API < Grape::API
  format :json

  desc 'return all users'
  get '/' do
    @users = User.all
    present @users, with: UserEntity
  end

  desc 'return a user'
  params do
    requires :email
    requires :password
  end
  get '/?email=:email&password=:password' do
    @user = User.find_by(email:params[:email], password:params[:password])
    present @user, with: UserEntity
  end

end
