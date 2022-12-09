import React from "react";
import { NavbarRegister } from "./NavbarRegister";

export const Register = () => {
  return (
    <div className="Register">
      <NavbarRegister />
      <main className="body-form container mt-3">
        <h1>Daftar Sekarang</h1>
        <p className="already-have">
          Sudah punya akun?{" "}
          <a href="#" className="text-masuk">
            Masuk
          </a>
        </p>
        <form className="form-picko">
          <div class="mb-3">
            <label for="nama" class="form-label">
              Nama
            </label>
            <input type="text" class="form-control input-picko" id="nama" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email
            </label>
            <input type="email" class="form-control input-picko" id="email" />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control input-picko"
              id="password"
            />
          </div>
          <div class="mb-3">
            <label for="alamat" class="form-label">
              Alamat
            </label>
            <textarea
              type="text"
              class="form-control input-picko"
              id="alamat"
            />
          </div>
          <div class="mb-3">
            <label for="alamat" class="form-label">
              Tanggal Lahir
            </label>
            <input type="date" class="form-control input-picko" id="alamat" />
          </div>
          <div class="mb-3">
            <label for="tanggal_lahir" class="form-label">
              Tanggal Lahir
            </label>
            <select
              type="date"
              class="form-select input-picko"
              id="tanggal_lahir"
            >
              <option value="laki-laki">Laki-laki</option>
              <option value="perempuan">Perempuan</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="bidang" class="form-label">
              Bidang
            </label>
            <input type="text" class="form-control input-picko" id="bidang" />
          </div>
          <div class="mb-3">
            <label for="foto" class="form-label">
              Foto
            </label>
            <input type="file" class="form-control input-picko" id="foto" />
          </div>
          <div class="mb-3">
            <label for="link_medsos" class="form-label">
              Link Social Media
            </label>
            <input
              type="text"
              class="form-control input-picko"
              id="link_medsos"
            />
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button
              className="btn btn-primary btn-register-picko"
              onClick={(e) => {
                e.preventDefault();
                alert("Data Berhasil Disimpan!");
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};
