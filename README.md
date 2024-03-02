# Emotiary(Emotion + Diary)

**Emotiary**는 일기를 작성하면 AI로 분석하여 감정 이모지를 추출해 기록하는 캘린더 프로젝트입니다. 이 프로젝트를 통해 사용자들은 매일의 감정을 나타내는 이모지를 선택하여 캘린더를 통해 한 달 간의 감정 변화를 직관적으로 파악할 수 있게 됩니다. 네트워킹과 알림을 활용하여 다른 사용자들과 일기를 공유하고 상호 작용하며, 일기를 꾸준히 쓰는 습관을 만들어주고, 사용자들이 감정을 정리하며 더 나은 자기 인식을 얻을 수 있도록 돕는 서비스입니다.

![프로젝트 재생 gif](./main.gif)

- 2023년 10월 2일부터 2023년 11월 3일까지 약 5주간 진행했습니다.
- Python 기반으로 머신러닝 모델을 생성하고 별도의 서버를 통해 서비스하는 과정을 학습했습니다.
- 부트캠프에서 자체적으로 호스팅하는 사설 GitLab 인스턴스에 있던 repo의 최종 브랜치를 클론했습니다. 

## 팀 구성
프론트엔드 개발 팀원 2명, 백엔드 개발 팀원 4명, AI 개발 팀원 3명으로 구성된 팀입니다.

## 담당 역할
서비스 기획 일부 및 머신러닝 모델의 하이퍼파라미터 튜닝에 협업했습니다.

# 주요 기능 및 특징

### 1. 일기 생성 후 이모지 선택 및 오디오 제공

- 일기 생성, 수정 및 삭제
- 일기의 감정 분석 및 이모지 제공 후 선택 기능
- 다른 사용자의 일기 열람 가능
- 메인 화면의 먼슬리에 한 달 동안 기록된 이모지 표시
- 감정 분석 결과에 따른 음악 추천
- 월별 이모지 분석 후 이미지 제공

### 2. 댓글 및 대댓글

- 게시글 작성시 gptAPI를 이용하여 댓글 자동으로 추가
- 댓글 및 대댓글 작성 시 이모지 분석

### 3. 전체 공개 다이어리 공유

- 전체 공개 다이어리 조회 기능
- 유저당 좋아요 표시 기능 및 다이어리 조회 모달 연결
- 다이어리 검색 기능

### 4. 전체 유저 조회

- 모든 유저 조회 기능
- 각 유저별 페이지로 캘린더 공유 가능
- 친구 추가 및 검색 기능

### 5. 채팅

- 네트워킹을 위한 실시간 채팅 기능
- 로그인 시 웹소켓 연결 및 채팅방 입장


# 프로덕트 개발

## 기술 스택 및 도구

### AI
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=ffffff)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=ffffff)

### 프론트엔드
![React](https://img.shields.io/badge/React-222222?style=for-the-badge&logo=react&logoColor=ffffff)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=ffffff)
![Axios](https://img.shields.io/badge/Axios-007ACC?style=for-the-badge&logo=axios&logoColor=ffffff)
![Recoil](https://img.shields.io/badge/Recoil-764ABC?style=for-the-badge&logo=recoil&logoColor=ffffff)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![date-fns](https://img.shields.io/badge/date--fns-EA4AAA?style=for-the-badge)
![react-datepicker](https://img.shields.io/badge/react--datepicker-61DAFB?style=for-the-badge)
![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=ffffff)
![socket.io](https://img.shields.io/badge/socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=ffffff)

### 백엔드
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=ffffff)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=000000)
![Google APIs](https://img.shields.io/badge/Google%20APIs-4285F4?style=for-the-badge&logo=google&logoColor=ffffff)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=ffffff)
![Morgan](https://img.shields.io/badge/Morgan-82B41C?style=for-the-badge)
![Node-cron](https://img.shields.io/badge/Node--cron-00B289?style=for-the-badge)
![Nodemailer](https://img.shields.io/badge/Nodemailer-009688?style=for-the-badge)
![Passport](https://img.shields.io/badge/Passport-34E27C?style=for-the-badge)
![OpenAPI](https://img.shields.io/badge/OpenAPI-FF5733?style=for-the-badge)
![YouTube API](https://img.shields.io/badge/YouTube%20API-FF0000?style=for-the-badge)

### 기획 및 배포
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=ffffff)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=ffffff)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=ffffff)
![GitLab](https://img.shields.io/badge/GitLab-FCA121?style=for-the-badge&logo=gitlab&logoColor=ffffff)

### 데이터

## 학습 데이터
- 감성대화 말뭉치
- 한국어 단발성 대화 데이터셋

## 감정분류 클래스 레이블
- 분노. 행복, 불안, 당황, 슬픔, 중립, 혐오
