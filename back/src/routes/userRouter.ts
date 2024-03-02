import { Router } from 'express';
import {
  userLogin,
  verifyEmail,
  emailVerified,
  userRegister,
  getMyInfo,
  getAllUser,
  getMyFriend,
  getUserId,
  updateUser,
  deleteUser,
  forgotPassword,
  resetPassword,
  refresh,
  loginCallback,
  userLogout,
  emailLink,
  testEmail,
  searchKeyword,
  expire,
} from '../controllers/userController';
import { localAuthentication } from '../middlewares/authenticateLocal';
import { jwtAuthentication } from '../middlewares/authenticateJwt';
import { fileUpload } from '../middlewares/uploadMiddleware';
import { wrapAsyncController } from '../utils/wrapper';
import passport from 'passport';
const userAuthRouter = Router();
// 회원가입
userAuthRouter.post('/register', wrapAsyncController(userRegister));

// 로그인
userAuthRouter.post(
  '/login',
  localAuthentication,
  wrapAsyncController(userLogin),
);

// 이메일 인증후 회원가입
userAuthRouter.post('/testregister', wrapAsyncController(testEmail));

// 이메일 인증
userAuthRouter.post('/email', wrapAsyncController(emailLink));

// 이메일 인증 토큰 검증
userAuthRouter.get('/verifyEmail/:token', wrapAsyncController(verifyEmail));

// 이메일 인증되었는지 확인
userAuthRouter.get('/verified', emailVerified);
// 유저 키워드 검색
userAuthRouter.get(
  '/search',
  jwtAuthentication,
  wrapAsyncController(searchKeyword),
);

// 현재 유저 정보
userAuthRouter.get(
  '/current',
  jwtAuthentication,
  wrapAsyncController(getMyInfo),
);

// 모든 유저 정보
userAuthRouter.get(
  '/allUser',
  jwtAuthentication,
  wrapAsyncController(getAllUser),
);

// 친구 유저 정보
userAuthRouter.get(
  '/myfriend',
  jwtAuthentication,
  wrapAsyncController(getMyFriend),
);

// 로그아웃
userAuthRouter.get(
  '/logout',
  jwtAuthentication,
  wrapAsyncController(userLogout),
);

// 토큰 만료 여부 체크
userAuthRouter.get(
  '/tokenExpire',
  jwtAuthentication,
  wrapAsyncController(expire),
);

// 특정 유저 정보, 유저 수정, 유저 탈퇴
userAuthRouter
  .route('/:userId')
  .get(jwtAuthentication, wrapAsyncController(getUserId))
  .put(jwtAuthentication, fileUpload, wrapAsyncController(updateUser))
  .delete(jwtAuthentication, wrapAsyncController(deleteUser));

// 비밀번호 재설정 이메일 보내기
userAuthRouter.post('/forgot-password', wrapAsyncController(forgotPassword));

// 비밀번호 재설정
userAuthRouter.post(
  '/reset-password',
  jwtAuthentication,
  wrapAsyncController(resetPassword),
);

// refresh token사용
userAuthRouter.post('/refresh-token', wrapAsyncController(refresh));

// 소셜 로그인
userAuthRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ],
  }),
);

// 소셜 로그인 리디렉션
userAuthRouter.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  loginCallback,
);

export default userAuthRouter;
