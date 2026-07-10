FROM ubuntu:14.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    build-essential gawk git gettext \
    libncurses5-dev libssl-dev xsltproc libxml2-utils python2.7 \
    flex bison autoconf automake libtool pkg-config \
    gcc-4.8 g++-4.8

RUN update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-4.8 50
RUN update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-4.8 50

WORKDIR /workspace
