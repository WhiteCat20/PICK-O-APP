import React from 'react'

export const Login = () => {
  return (
    <div className='LoginPage d-flex justify-content-center align-items-center'>
      <div className='login-card rounded-3'>
        <h1 className='text-center'>Pick'O</h1>
          <div className='login-body'>
          <div class="mb-2">
              <label for="email" class="form-label text-white">
                Email
              </label>
              <input type="text" class="form-control input-picko" id="email" />
          </div>
          <div class="mb-2">
              <label for="password" class="form-label text-white">
                Password
              </label>
              <input type="password" class="form-control input-picko" id="password" />
          </div>
          <label className='form-label no-account-text d-block'>Belum punya akun? <a href="/register">Register!</a></label>
          <button className='btn btn-primary login-button'>Login</button>
        </div>
      </div>
    </div>
  )
}
