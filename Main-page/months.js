const jan = `<h5 class="subtitle">January</h5>`;
const feb = `<h5 class="subtitle">February</h5>`;

const jancontent = `<div class="sameline" id="boxrow">
                        <div class="innerbox inwidth">
                            <div>
                                <p>24th</p>
                                <h5 class="subtitle">SASS Dashboard</h5>
                                <div class="sameline">
                                    <h6 class="blue">SASS</h6>
                                </div>
                            </div>
                            <div class="sameline">
                                <img src="../Image/tron.png">
                                <div class="newline"><h5 class="mentor">Tron</h5><p>Security program</p></div>
                            </div>
                        </div>
                        <div class="innerbox inwidth" id="mid">
                            <div>
                                <div class="sameline separate"><p>28th</p><p id="orange">💿 derezzed</p></div>
                                <h5 class="subtitle">Single/one responsive page using Bootstrap</h5>
                                <div class="sameline">
                                    <h6 class="blue">Bootstrap</h6>
                                </div>
                            </div>
                            <div class="sameline">
                                <img src="../Image/ram.png">
                                <div class="newline"><h5 class="mentor">Ram</h5><p id="light">Actuarial program</p></div>
                            </div>
                        </div>
                        <div class="innerbox inwidth">
                            <div>
                                <p>31st</p>
                                <h5 class="subtitle">Netflix replica using Tailwind CSS</h5>
                                <div class="sameline">
                                    <h6 class="blue">Tailwind</h6>
                                </div>
                            </div>
                            <div class="sameline">
                                <img src="../Image/mcp.png">
                                <div class="newline"><h5 class="mentor">MCP</h5><p>Former chess alg</p></div>
                            </div>
                        </div>
                    </div>`;

const febcontent = `<div class="sameline" id="boxrow">
                        <div class="innerbox inwidth">
                            <div>
                                <p>6th</p>
                                <h5 class="subtitle">Arrays and Loops</h5>
                                <div class="sameline">
                                    <h6 class="blue">JS</h6>
                                </div>
                            </div>
                            <div class="sameline">
                                <img src="../Image/tron.png">
                                <div class="newline"><h5 class="mentor">Tron</h5><p>Security program</p></div>
                            </div>
                        </div>
                        <div class="innerbox inwidth" id="mid">
                            <div>
                                <div class="sameline separate"><p>12th</p><p id="orange">💿 derezzed</p></div>
                                <h5 class="subtitle">Object Oriented Programming (OOP)</h5>
                                <div class="sameline">
                                    <h6 class="blue">JS</h6>
                                </div>
                            </div>
                            <div class="sameline">
                                <img src="../Image/ram.png">
                                <div class="newline"><h5 class="mentor">Ram</h5><p id="light">Actuarial program</p></div>
                            </div>
                        </div>
                        <div class="innerbox inwidth">
                            <div>
                                <p>20th-26th</p>
                                <h5 class="subtitle">Data Structures</h5>
                                <div class="sameline">
                                    <h6 class="blue">JS</h6>
                                </div>
                            </div>
                            <div class="sameline">
                                <img src="../Image/mcp.png">
                                <div class="newline"><h5 class="mentor">MCP</h5><p>Former chess alg</p></div>
                            </div>
                        </div>
                    </div>`;

document.getElementById("month").innerHTML = jan;
document.getElementById("schedulecontent").innerHTML = jancontent;

function rb() {
    document.getElementById("month").innerHTML = feb;
    document.getElementById("schedulecontent").innerHTML = febcontent;
}

function lb() {
    document.getElementById("month").innerHTML = jan;
    document.getElementById("schedulecontent").innerHTML = jancontent;
}