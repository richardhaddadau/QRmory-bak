import React, { useState } from "react";
import {
    FaDiscord,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaSnapchatSquare,
    FaTiktok,
    FaTumblrSquare,
    FaTwitch,
    FaTwitterSquare,
    FaYoutube,
} from "react-icons/all";

const SocialMediaQR = ({ setText, setChanged }) => {
    // States
    const [facebook, setFacebook] = useState("");
    const [twitter, setTwitter] = useState("");
    const [instagram, setInstagram] = useState("");
    const [snapchat, setSnapchat] = useState("");
    const [tiktok, setTiktok] = useState("");
    const [youtube, setYoutube] = useState("");
    const [discord, setDiscord] = useState("");
    const [tumblr, setTumblr] = useState("");
    const [github, setGithub] = useState("");

    return (
        <div className="w-full max-w-md mx-auto flex justify-center">
            <div className="relative w-full grid grid-cols-2">
                <div>
                    <label className="text-hot-pink-200">
                        <FaFacebookSquare color="white" />
                        <input
                            type="text"
                            className="w-full text-white bg-transparent border-hot-pink-200 focus:bg-hot-pink-800 transition-all duration-300"
                            placeholder="Facebook (eg. https://facebook.com/qrmory)"
                            onChange={(el) => {
                                setFacebook(el.target.value);
                            }}
                        />
                    </label>

                    <label className="text-hot-pink-200">
                        <FaInstagramSquare color="white" />
                        <input
                            type="text"
                            className="w-full text-white bg-transparent border-hot-pink-200 focus:bg-hot-pink-800 transition-all duration-300"
                            placeholder="Instagram (eg. https://instagram.com/qrmory)"
                            onChange={(el) => {
                                setInstagram(el.target.value);
                            }}
                        />
                    </label>

                    <label className="text-hot-pink-200">
                        <FaTiktok color="white" />
                        <input
                            type="text"
                            className="w-full text-white bg-transparent border-hot-pink-200 focus:bg-hot-pink-800 transition-all duration-300"
                            placeholder="Tiktok (eg. https://tiktok.com/@qrmory)"
                            onChange={(el) => {
                                setTiktok(el.target.value);
                            }}
                        />
                    </label>

                    <label className="text-hot-pink-200">
                        <FaTwitch color="white" />
                        <input
                            type="text"
                            className="w-full text-white bg-transparent border-hot-pink-200 focus:bg-hot-pink-800 transition-all duration-300"
                            placeholder="Facebook (eg. https://facebook.com/qrmory)"
                            onChange={(el) => {
                                setFacebook(el.target.value);
                            }}
                        />
                    </label>

                    <label className="text-hot-pink-200">
                        <FaDiscord color="white" />
                        <input
                            type="text"
                            className="w-full text-white bg-transparent border-hot-pink-200 focus:bg-hot-pink-800 transition-all duration-300"
                            placeholder="Discord (eg. https://discord.com/qrmory)"
                            onChange={(el) => {
                                setDiscord(el.target.value);
                            }}
                        />
                    </label>
                </div>

                <div>
                    <label className="text-hot-pink-200">
                        <FaTwitterSquare color="white" />
                        <input
                            type="text"
                            className="w-full text-white bg-transparent border-hot-pink-200 focus:bg-hot-pink-800 transition-all duration-300"
                            placeholder="Twitter (eg. https://twitter.com/qrmory)"
                            onChange={(el) => {
                                setTwitter(el.target.value);
                            }}
                        />
                    </label>

                    <label className="text-hot-pink-200">
                        <FaYoutube color="white" />
                        <input
                            type="text"
                            className="w-full text-white bg-transparent border-hot-pink-200 focus:bg-hot-pink-800 transition-all duration-300"
                            placeholder="Youtube (eg. https://youtube.com/qrmory)"
                            onChange={(el) => {
                                setYoutube(el.target.value);
                            }}
                        />
                    </label>

                    <label className="text-hot-pink-200">
                        <FaSnapchatSquare color="white" />
                        <input
                            type="text"
                            className="w-full text-white bg-transparent border-hot-pink-200 focus:bg-hot-pink-800 transition-all duration-300"
                            placeholder="Snapchat (eg. https://snapchat.com/qrmory)"
                            onChange={(el) => {
                                setSnapchat(el.target.value);
                            }}
                        />
                    </label>

                    <label className="text-hot-pink-200">
                        <FaTumblrSquare color="white" />
                        <input
                            type="text"
                            className="w-full text-white bg-transparent border-hot-pink-200 focus:bg-hot-pink-800 transition-all duration-300"
                            placeholder="Tumblr (eg. https://twitter.com/qrmory)"
                            onChange={(el) => {
                                setTumblr(el.target.value);
                            }}
                        />
                    </label>

                    <label className="text-hot-pink-200">
                        <FaGithubSquare color="white" />
                        <input
                            type="text"
                            className="w-full text-white bg-transparent border-hot-pink-200 focus:bg-hot-pink-800 transition-all duration-300"
                            placeholder="GitHub (eg. https://twitter.com/qrmory)"
                            onChange={(el) => {
                                setGithub(el.target.value);
                            }}
                        />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaQR;
