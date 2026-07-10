FROM ubuntu:18.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && apt install -y \
    build-essential gawk git gettext \
    libncurses5-dev libssl-dev xsltproc libxml2-utils python3 \
    flex bison autoconf automake libtool pkg-config \
    gcc-5 g++-5

# 使用 gcc-5（Padavan 4.4 相容）
RUN update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-5 50
RUN update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-5 50

# 建立工作目錄
WORKDIR /workspace
