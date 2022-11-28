import React from 'react';
import s from './Header.module.scss';
import Nav from "./Nav/Nav";
import smain from "../../common/styles/container.module.scss";

const Header = () => {
    return (
        <div className={s.header}>
            <div className={`${smain.container} ${s.headerContainer}`}>
                <Nav/>
                <div className={s.logo}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAEfUlEQVRoge2aX2hbZRjGn+c7/bN1tHSyIXSsbUoLVqhdbBli09mw6vx3ueK8KCJChyDIEFQQNhR7LYIMN9ELJyK9qexiF4qEkUR70TZpZSvYLmfagROnK3O0nU2+15ukTdPT9PTkpGnr+UHh9Hu/857n4ft4v5O8ATw8PDw8PLYNzP7nyvR0Zc0/6gzI4yD3l0qUK4jchcgP96r1R8+3tDzIDJdlLoaGxKi5b34H4lj6hhKodBmyt+a+cUJEjpPUQJbhQ803+wRps+AVQm6VRqU7COQwwOcA9EQnzJMAhoAsw0IcBQAC011+3wulkeku0VjiFwFaIHwCacMqEyRkHwAIea9E+lwn4yXjDchaYbcJj810UKnRYuW3gsDFLn/T6Xxz8hoOhUJlFbUN7wjQK8RkUngu6PfNZeLh8UQ/FF6h4LYYxtnuxxoSbokvFnkNl9c2vC3AhwBAQU8ZpA5AHwCEx8xnSfkS6WKuUqmjoVDo0WAwmMzNI8AgyN9cV5+GIu8BqLczd6Mt/fSqxMAzmWtlSG/2ySVAi6qt9wGYXpNF6+HujuYxO4KcEImbAxAp3LAQkxT0rAxgInOpNSa56rUFf+s5NWuVRxmqNTw2Y0ePI0SkihtPA7CB4aTwXBmkjsAJCOIpymuZWMDv+yoSM9tJvArI76DxRjDYuGgtCJeolFVoy8lrOF2g+qxi6TeXt9J/O4aiHUt7pWpqQc93Fiu/FaS6s9Gcohnu7KybB1C0QuWUtYZFDobj5kAJtLiPyMHcIasVrqfIhS2QUxK2R+ncQtauMDkWOOLb0mJTLCJxcxQiHdlj/7sV9gzvdgo6h0Mhc8+eGvqWuHTn2OMtf7olqpg4XuHIuHm2vFb+Sil9XdH4IxpLXPgpZja6Ka4YODIcHTdPgfI+gKr0EAUYSEFGRkama9yT5z7OtjT1SzlfaWd4OFlh9AC4bCdNJJa4BLLVkYYcBBzsPtI4vNE8R4YFPLBejORDthORrbnnpGOINa+RVjgyTMIUQcAqpjVu284jMgy3PmBQpuxMc7bCQgOw7kwIsWA3T5e/adDJ8wvBWZWmVK4XMtT6se2AI8MpQ58BkLIIXX6y3fd9YZKKi6Mt/VRb82w0duMTAd9cHiQWJaU/IGm7C7djqjQA/Dun3i2vlWXDAvl201/F7pQqDQDV1bpyMessplYVm82xY6p0ePLX/Qs6eX7V5qW8GB6/8XLA3/SN3W297av01YmbvkjMPM9UapbCUznhCpJfRyfM65G4efratWubXvGtwLbh8Hii39B6CpDXAexbd6LgEYh8evfB3tEf47OH3BDpJra29NWfZw4zic8A2D9jiTaNpY8BnFxvSkFVWmQq4G/q3+xttgyrJQbATZhdFrXSfLOkkCpNu92k1dgyTIO3qHHR0RPy5S2kSos4ar/aMhxobwoDCDt5QD62fZXeDXiGdztWzbSGaCyxK3pLItKQO5ZtOPNjlAMC7I7u4QrLP7RZNqy1/oJUbVCssr5nh6JlPmWoz0stw8PDw8PDw4L/AAW6geXxVgFlAAAAAElFTkSuQmCC"/>
                </div>
            </div>
        </div>
    );
};

export default Header;