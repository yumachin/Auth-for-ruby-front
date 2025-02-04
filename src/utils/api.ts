import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1';

export const signUp = async ( email:string, password:string, passwordConfirmation:string ) => {
  try {
    // routes.rbで設定したエンドポイント
    const res = await axios.post(`${API_URL}/signup`, {
      // params.require(:user)と設定しているため、user: {}の形にする必要あり
      user: {
        email,
        password,
        password_confirmation: passwordConfirmation,
      },
    });
    // axiosを使った場合、JSONデータにパース済
    return res.data;
  } catch (error) {
    console.error("サインアップAPIにおけるエラーは => ", error);
    // APIの呼び出し元にエラーを伝えるため、APIファイルにはこの処理が必要
    throw new Error('サインアップに失敗しました。');
  }
};

export const login = async ( email:string, password:string ) => {
  try {
    const res = await axios.post(`${API_URL}/login`, { email, password });
    localStorage.setItem('token', res.data.token);
    return res.data;
  } catch (error) {
    console.error("ログインAPIにおけるエラーは => ", error);
    throw new Error('ログインに失敗しました。');
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};

// 現在がログイン中か否かを判定
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token ? true : false;
};
