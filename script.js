// import { GoogleGenerativeAI } from "@google/generative-ai";
// const genAi = new GoogleGenerativeAI("AIzaSyBklf3fPybB1UX9q5kToW-2zjkHO6RiQIs");
const begin = document.querySelector('.hime');
const enter= document.querySelector('.enter');
const front= document.querySelector('.home');
const suggest = document.querySelector('.suggest');
const login=document.querySelector('.login');
const paris1=document.querySelector('.paris1');
const dubai=document.querySelector('.dubai');
const dubai1=document.querySelector('.dubai1');
const tokyo=document.querySelector('.tokyo');
const tokyo1=document.querySelector('.tokyo1');
const paris=document.querySelector('.paris');
const goquiz=document.querySelector('.goquiz');
const containers=document.querySelector('.containers');
const travelsuggest=document.querySelector('.travelsuggest');
const cross1=document.querySelector('.cross1');
const cross2=document.querySelector('.cross2');
const cross3=document.querySelector('.cross3');
const result=document.querySelector('.result');
const srinagar=document.querySelector('.srinagar');
const srinagar1=document.querySelector('.srinagar1');
const suggest1=document.querySelector('.suggest1');
const chatcontainer=document.querySelector('.chat-container');
const chat1=document.querySelector('.chat1');
const logi=document.querySelector('.logi');
const log=document.querySelector('.log');
const emer=document.querySelector('.emer');
const budgget=document.querySelector('.budgget');
const emergency=document.querySelector('.emergency');
const chat2=document.querySelector('.chat2');
const lcontainer=document.querySelector('.lcontainer');
const floatingbtn=document.querySelector('.floating-btn');
!function(w, d, s, ...args){
    var div = d.createElement('div');
    div.id = 'aichatbot';
    d.body.appendChild(div);
    w.chatbotConfig = args;
    var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s);
    j.defer = true;
    j.type = 'module';
    j.src = 'https://aichatbot.sendbird.com/index.js';
    f.parentNode.insertBefore(j, f);
  }(window, document, 'script', 'BBD42528-9BD2-4D83-9AF5-5D502B4C3F61', 'TpeHkm05W5PVT9p54DbiA', {
    apiHost: 'https://api-cf-ap-8.sendbird.com',
  });
log.onclick = ()=>{
  begin.classList.remove('show');
  logi.style.display='flex';
}
floatingbtn.onclick = ()=>{
    begin.classList.remove('show');
  lcontainer.style.display='flex';
}
chat2.onclick = ()=>{
  suggest.classList.remove('show');
  budgget.classList.add('show');
}
emer.onclick = ()=>{
  begin.classList.remove('show');
  emergency.classList.add('show');
}
enter.onclick = ()=>{
    front.classList.remove('show');
    begin.classList.add('show');
}
goquiz.onclick = ()=>{
suggest.classList.remove('show');
containers.style.display='flex';
}
login.onclick = ()=>{
    begin.classList.remove('show');
    suggest.classList.add('show');
}
paris1.onclick = ()=>{
    suggest.classList.remove('show');
    paris.classList.add('show');
}
tokyo1.onclick = ()=>{
suggest.classList.remove('show');
tokyo.classList.add('show');
}
dubai1.onclick = ()=>{
  suggest.classList.remove('show');
  dubai.classList.add('show');
}
cross1.onclick = ()=>{
  suggest.classList.add('show');
  paris.classList.remove('show');
}
cross2.onclick = ()=>{
  suggest.classList.add('show');
  tokyo.classList.remove('show');
}
cross3.onclick = ()=>{
  suggest.classList.add('show');
 dubai.classList.remove('show');
}
chat1.onclick = ()=>{
  suggest.classList.remove('show');
  chatcontainer.classList.add('show');
}
const destinations = [
    { name: "Hawaii", type: "Relaxation", climate: "Tropical", budget: "High", activities: ["Beach", "Snorkeling", "Spa"] },
    { name: "Iceland", type: "Adventure", climate: "Cold", budget: "Medium", activities: ["Hiking", "Hot Springs"] },
    { name: "Paris", type: "Culture", climate: "Temperate", budget: "Medium", activities: ["Museums", "Shopping", "Dining"] },
    { name: "Egypt", type: "Adventure", climate: "Arid", budget: "Low", activities: ["Hiking", "Pyramids"] },
    { name: "Thailand", type: "Nature", climate: "Tropical", budget: "Medium", activities: ["Beach", "Hiking", "Snorkeling"] },
    { name: "Japan", type: "Culture", climate: "Temperate", budget: "High", activities: ["Museums", "Shopping", "Dining"] },
    { name: "Costa Rica", type: "Nature", climate: "Tropical", budget: "Medium", activities: ["Hiking", "Beach", "Wildlife"] }
];

// Handle form submission
document.getElementById("preferencesForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the user's input
    const tripType = document.getElementById("tripType").value;
    const climate = document.getElementById("climate").value;
    const budget = document.getElementById("budget").value;
    const activities = Array.from(document.getElementById("activities").selectedOptions).map(option => option.value);

    // Get the recommended destinations
    const recommendations = getRecommendations(tripType, climate, budget, activities);

    // Display the recommendations
    displayRecommendations(recommendations);
});

// Function to match destinations with user preferences
function getRecommendations(tripType, climate, budget, activities) {
    return destinations.filter(destination => {
        const typeMatch = destination.type === tripType;
        const climateMatch = destination.climate === climate;
        const budgetMatch = destination.budget === budget;
        const activitiesMatch = activities.some(activity => destination.activities.includes(activity));

        return typeMatch && climateMatch && budgetMatch && activitiesMatch;
    });
}

// Function to display the recommendations
function displayRecommendations(recommendations) {
    const list = document.getElementById("destinationList");
    list.innerHTML = ""; // Clear previous results

    if (recommendations.length > 0) {
        recommendations.forEach(destination => {
            const listItem = document.createElement("li");
            listItem.textContent = destination.name;
            list.appendChild(listItem);
        });
    } else {
        list.innerHTML = "<li>No matching destinations found. Please adjust your preferences.</li>";
    }
}

// Function to validate the form before submission
function validateForm() {
  let isValid = true;

  // Clear any previous error messages
  document.getElementById('usernameError').style.display = 'none';
  document.getElementById('passwordError').style.display = 'none';

  // Get the values of the input fields
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validate username (not empty)
  if (username === "") {
      document.getElementById('usernameError').innerText = "Username is required.";
      document.getElementById('usernameError').style.display = 'block';
      isValid = false;
  }

  // Validate password (not empty and has at least 6 characters)
  if (password === "") {
      document.getElementById('passwordError').innerText = "Password is required.";
      document.getElementById('passwordError').style.display = 'block';
      isValid = false;
  } else if (password.length < 6) {
      document.getElementById('passwordError').innerText = "Password must be at least 6 characters long.";
      document.getElementById('passwordError').style.display = 'block';
      isValid = false;
  }

  return isValid;
}

 // Function to request OTP
 async function requestOtp() {
  const aadhaarNumber = document.getElementById('aadhaarNumber').value;

  if (aadhaarNumber.length !== 12 || isNaN(aadhaarNumber)) {
    alert('Invalid Aadhaar number. Please enter a valid 12-digit Aadhaar number.');
    return;
  }

  try {
    const response = await fetch('/request-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ aadhaarNumber: aadhaarNumber }),
    });
    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      document.getElementById('otpSection').style.display = 'block'; // Show OTP input section
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error('Error requesting OTP:', error);
    alert('An error occurred while requesting OTP. Please try again.');
  }
}

// Function to verify OTP
async function verifyOtp() {
  const aadhaarNumber = document.getElementById('aadhaarNumber').value;
  const otp = document.getElementById('otp').value;

  try {
    const response = await fetch('/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ aadhaarNumber: aadhaarNumber, otp: otp }),
    });
    const data = await response.json();
    if (response.ok) {
      alert(data.message); // Successful authentication
    } else {
      alert(data.message); // Failed authentication
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    alert('An error occurred while verifying OTP. Please try again.');
  }
}

function triggerSOS() {
  alert("SOS Activated! Help is on the way.");
  // Add functionality to integrate with backend APIs or services here
}

// Initialize and load the map with the user's location
function initMap() {
  const mapElement = document.getElementById('map');

  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          (position) => {
              const { latitude, longitude } = position.coords;

              // Create a map centered on the user's location
              const map = new google.maps.Map(mapElement, {
                  center: { lat: latitude, lng: longitude },
                  zoom: 15
              });

              // Add a marker at the user's location
              new google.maps.Marker({
                  position: { lat: latitude, lng: longitude },
                  map: map,
                  title: "You are here!"
              });
          },
          () => {
              mapElement.innerHTML = "Unable to retrieve your location.";
          }
      );
  } else {
      mapElement.innerHTML = "Geolocation is not supported by your browser.";
  }
}

// Traveller Collaboration Form Submission
function submitCollaborationForm() {
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const messagesList = document.getElementById('messages-list');

  if (name && message) {
      const newMessage = document.createElement('li');
      newMessage.textContent = `${name}: ${message}`;
      messagesList.appendChild(newMessage);

      // Clear form fields
      document.getElementById('name').value = '';
      document.getElementById('message').value = '';
  } else {
      alert('Please fill out all fields.');
  }
}

document.getElementById('preferences-form').addEventListener('submit', async function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const preferences = {};
  formData.forEach((value, key) => {
      preferences[key] = value;
  });

  const response = await fetch('/recommend', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(preferences),
  });

  const data = await response.json();
  const recommendationsContainer = document.getElementById('recommendations');
  recommendationsContainer.innerHTML = '';

  data.recommendations.forEach(recommendation => {
      const element = document.createElement('div');
      element.innerHTML = `
          <strong>${recommendation.name}</strong><br>
          Type: ${recommendation.type}<br>
          Description: ${recommendation.description}<br><br>
      `;
      recommendationsContainer.appendChild(element);
  });
});


"use strict";
this.default_IdentityRotateCookiesHttp = this.default_IdentityRotateCookiesHttp || {};
(function(_) {
    var window = this;
    try {
        _._F_toggles_initialize = function(a) {
            (typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this)._F_toggles = a || []
        }
        ;
        (0,
        _._F_toggles_initialize)([0x60c, ]);
        /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        var q = function(a) {
            return aa ? n ? n.brands.some(function(b) {
                return (b = b.brand) && b.indexOf(a) != -1
            }) : !1 : !1
        }, t = function(a) {
            var b;
            a: {
                if (b = r.navigator)
                    if (b = b.userAgent)
                        break a;
                b = ""
            }
            return b.indexOf(a) != -1
        }, u = function() {
            return aa ? !!n && n.brands.length > 0 : !1
        }, v = function() {
            return u() ? q("Chromium") : (t("Chrome") || t("CriOS")) && !(u() ? 0 : t("Edge")) || t("Silk")
        }, w = function(a) {
            a = Error(a);
            a._closureerrorcontext984382 || (a.closureerrorcontext_984382 = {});
            a._closureerrorcontext_984382.severity = "warning";
            return a
        }, x = function() {
            return typeof BigInt === "function"
        }, ca = function(a) {
            return !(!a || typeof a !== "object" || a.g !== ba)
        }, y = function(a) {
            return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
        }, B = function(a) {
            return !Array.isArray(a) || a.length ? !1 : A(a) & 1 ? !0 : !1
        }, C = function(a) {
            a.K = !0;
            return a
        }, E = function(a) {
            var b = a;
            if (da(b)) {
                if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))
                    throw Error(String(b));
            } else if (ea(b) && !Number.isSafeInteger(b))
                throw Error(String(b));
            return D ? BigInt(a) : a = fa(a) ? a ? "1" : "0" : da(a) ? a.trim() || "0" : String(a)
        }, ja = function(a, b) {
            if (a.length > b.length)
                return !1;
            if (a.length < b.length || a === b)
                return !0;
            for (var c = 0; c < a.length; c++) {
                var f = a[c]
                  , e = b[c];
                if (f > e)
                    return !1;
                if (f < e)
                    return !0
            }
        }, ka = function(a) {
            var b = a >>> 0;
            F = b;
            G = (a - b) / 4294967296 >>> 0
        }, J = function(a) {
            if (a < 0) {
                ka(-a);
                var b = H(I(F, G));
                a = b.next().value;
                b = b.next().value;
                F = a >>> 0;
                G = b >>> 0
            } else
                ka(a)
        }, K = function(a, b) {
            b >>>= 0;
            a >>>= 0;
            if (b <= 2097151)
                var c = "" + (4294967296 * b + a);
            else
                x() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215,
                b = b >> 16 & 65535,
                a = (a & 16777215) + c * 6777216 + b * 6710656,
                c += b * 8147497,
                b *= 2,
                a >= 1E7 && (c += a / 1E7 >>> 0,
                a %= 1E7),
                c >= 1E7 && (b += c / 1E7 >>> 0,
                c %= 1E7),
                c = b + la(c) + la(a));
            return c
        }, la = function(a) {
            a = String(a);
            return "0000000".slice(a.length) + a
        }, ma = function() {
            var a = F
              , b = G;
            b & 2147483648 ? x() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = H(I(a, b)),
            a = b.next().value,
            b = b.next().value,
            a = "-" + K(a, b)) : a = K(a, b);
            return a
        }, I = function(a, b) {
            b = ~b;
            a ? a = ~a + 1 : b += 1;
            return [a, b]
        }, oa = function(a) {
            var b = typeof a;
            switch (b) {
            case "bigint":
                return !0;
            case "number":
                return Number.isFinite(a)
            }
            return b !== "string" ? !1 : na.test(a)
        }, sa = function(a) {
            var b = 0;
            b = b === void 0 ? 0 : b;
            if (!oa(a))
                throw w("int64");
            var c = typeof a;
            switch (b) {
            case 4096:
                switch (c) {
                case "string":
                    return L(a);
                case "bigint":
                    return String(BigInt.asIntN(64, a));
                default:
                    return pa(a)
                }
            case 8192:
                switch (c) {
                case "string":
                    return b = Math.trunc(Number(a)),
                    Number.isSafeInteger(b) ? a = E(b) : (b = a.indexOf("."),
                    b !== -1 && (a = a.substring(0, b)),
                    a = x() ? E(BigInt.asIntN(64, BigInt(a))) : E(qa(a))),
                    a;
                case "bigint":
                    return E(BigInt.asIntN(64, a));
                default:
                    return Number.isSafeInteger(a) ? E(ra(a)) : E(pa(a))
                }
            case 0:
                switch (c) {
                case "string":
                    return L(a);
                case "bigint":
                    return E(BigInt.asIntN(64, a));
                default:
                    return ra(a)
                }
            default:
                throw Error("Unknown format requested type for int64");
            }
        }, ta = function(a) {
            return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
        }, qa = function(a) {
            if (ta(a))
                return a;
            if (a.length < 16)
                J(Number(a));
            else if (x())
                a = BigInt(a),
                F = Number(a & BigInt(4294967295)) >>> 0,
                G = Number(a >> BigInt(32) & BigInt(4294967295));
            else {
                var b = +(a[0] === "-");
                G = F = 0;
                for (var c = a.length, f = b, e = (c - b) % 6 + b; e <= c; f = e,
                e += 6)
                    f = Number(a.slice(f, e)),
                    G *= 1E6,
                    F = F * 1E6 + f,
                    F >= 4294967296 && (G += Math.trunc(F / 4294967296),
                    G >>>= 0,
                    F >>>= 0);
                b && (b = H(I(F, G)),
                a = b.next().value,
                b = b.next().value,
                F = a,
                G = b)
            }
            return ma()
        }, ra = function(a) {
            a = Math.trunc(a);
            if (!Number.isSafeInteger(a)) {
                J(a);
                var b = F
                  , c = G;
                if (a = c & 2147483648)
                    b = ~b + 1 >>> 0,
                    c = ~c >>> 0,
                    b == 0 && (c = c + 1 >>> 0);
                var f = c * 4294967296 + (b >>> 0);
                b = Number.isSafeInteger(f) ? f : K(b, c);
                a = typeof b === "number" ? a ? -b : b : a ? "-" + b : b
            }
            return a
        }, pa = function(a) {
            a = Math.trunc(a);
            if (Number.isSafeInteger(a))
                a = String(a);
            else {
                var b = String(a);
                ta(b) ? a = b : (J(a),
                a = ma())
            }
            return a
        }, L = function(a) {
            var b = Math.trunc(Number(a));
            if (Number.isSafeInteger(b))
                return String(b);
            b = a.indexOf(".");
            b !== -1 && (a = a.substring(0, b));
            return qa(a)
        }, va = function(a, b, c) {
            var f = f != null ? f : 0;
            if (a == null) {
                var e = 96;
                c ? (a = [c],
                e |= 512) : a = [];
                b && (e = e & -33521665 | (b & 1023) << 15)
            } else {
                if (!Array.isArray(a))
                    throw Error("i");
                e = A(a);
                if (e & 2048)
                    throw Error("l");
                if (e & 64)
                    return a;
                f === 1 || f === 2 || (e |= 64);
                if (c && (e |= 512,
                c !== a[0]))
                    throw Error("m");
                a: {
                    c = a;
                    if (f = c.length) {
                        var k = f - 1;
                        if (y(c[k])) {
                            e |= 256;
                            b = k - (+!!(e & 512) - 1);
                            if (b >= 1024)
                                throw Error("n");
                            e = e & -33521665 | (b & 1023) << 15;
                            break a
                        }
                    }
                    if (b) {
                        b = Math.max(b, f - (+!!(e & 512) - 1));
                        if (b > 1024)
                            throw Error("o");
                        e = e & -33521665 | (b & 1023) << 15
                    }
                }
            }
            ua(a, e);
            return a
        }, xa = function(a, b) {
            return wa(b)
        }, wa = function(a) {
            switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "bigint":
                return ya(a) ? Number(a) : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (B(a))
                            return
                    } else if (za && a != null && a instanceof Uint8Array) {
                        if (Aa) {
                            for (var b = "", c = 0, f = a.length - 10240; c < f; )
                                b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                            b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                            a = btoa(b)
                        } else {
                            b === void 0 && (b = 0);
                            if (!M) {
                                M = {};
                                c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
                                f = ["+/=", "+/", "-=", "-.", "-_"];
                                for (var e = 0; e < 5; e++) {
                                    var k = c.concat(f[e].split(""));
                                    Ba[e] = k;
                                    for (var d = 0; d < k.length; d++) {
                                        var g = k[d];
                                        M[g] === void 0 && (M[g] = d)
                                    }
                                }
                            }
                            b = Ba[b];
                            c = Array(Math.floor(a.length / 3));
                            f = b[64] || "";
                            for (e = k = 0; k < a.length - 2; k += 3) {
                                var h = a[k]
                                  , l = a[k + 1];
                                g = a[k + 2];
                                d = b[h >> 2];
                                h = b[(h & 3) << 4 | l >> 4];
                                l = b[(l & 15) << 2 | g >> 6];
                                g = b[g & 63];
                                c[e++] = d + h + l + g
                            }
                            d = 0;
                            g = f;
                            switch (a.length - k) {
                            case 2:
                                d = a[k + 1],
                                g = b[(d & 15) << 2] || f;
                            case 1:
                                a = a[k],
                                c[e] = b[a >> 2] + b[(a & 3) << 4 | d >> 4] + g + f
                            }
                            a = c.join("")
                        }
                        return a
                    }
            }
            return a
        }, Da = function(a, b, c, f, e) {
            if (a != null) {
                if (Array.isArray(a))
                    a = B(a) ? void 0 : e && A(a) & 2 ? a : Ca(a, b, c, f !== void 0, e);
                else if (y(a)) {
                    var k = {}, d;
                    for (d in a)
                        k[d] = Da(a[d], b, c, f, e);
                    a = k
                } else
                    a = b(a, f);
                return a
            }
        }, Ca = function(a, b, c, f, e) {
            var k = f || c ? A(a) : 0;
            f = f ? !!(k & 32) : void 0;
            a = Array.prototype.slice.call(a);
            for (var d = 0; d < a.length; d++)
                a[d] = Da(a[d], b, c, f, e);
            c && c(k, a);
            return a
        }, Fa = function(a) {
            return a.H === Ea ? a.toJSON() : wa(a)
        }, Ga = function(a) {
            a = a.o;
            a = O ? a : Ca(a, Fa, void 0, void 0, !1);
            var b = !O
              , c = a.length;
            if (c) {
                var f = a[c - 1]
                  , e = y(f);
                e ? c-- : f = void 0;
                var k = a;
                if (e) {
                    b: {
                        var d = f;
                        var g;
                        var h = !1;
                        if (d)
                            for (var l in d)
                                if (isNaN(+l))
                                    e = void 0,
                                    ((e = g) != null ? e : g = {})[l] = d[l];
                                else if (e = d[l],
                                Array.isArray(e) && (B(e) || ca(e) && e.size === 0) && (e = null),
                                e == null && (h = !0),
                                e != null) {
                                    var p = void 0;
                                    ((p = g) != null ? p : g = {})[l] = e
                                }
                        h || (g = d);
                        if (g)
                            for (var N in g) {
                                h = g;
                                break b
                            }
                        h = null
                    }
                    d = h == null ? f != null : h !== f
                }
                for (; c > 0; c--) {
                    g = k[c - 1];
                    if (!(g == null || B(g) || ca(g) && g.size === 0))
                        break;
                    var m = !0
                }
                if (k !== a || d || m) {
                    if (!b)
                        k = Array.prototype.slice.call(k, 0, c);
                    else if (m || d || h)
                        k.length = c;
                    h && k.push(h)
                }
                m = k
            } else
                m = a;
            return m
        }, Ha = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        }, Ia = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype)
                return a;
            a[b] = c.value;
            return a
        }
        , Ja = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math)
                    return c
            }
            throw Error("a");
        }, P = Ja(this), Q = function(a, b) {
            if (b)
                a: {
                    var c = P;
                    a = a.split(".");
                    for (var f = 0; f < a.length - 1; f++) {
                        var e = a[f];
                        if (!(e in c))
                            break a;
                        c = c[e]
                    }
                    a = a[a.length - 1];
                    f = c[a];
                    b = b(f);
                    b != f && b != null && Ia(c, a, {
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
        }, Ka = typeof Object.create == "function" ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        }
        , La;
        if (typeof Object.setPrototypeOf == "function")
            La = Object.setPrototypeOf;
        else {
            var Ma;
            a: {
                var Na = {
                    a: !0
                }
                  , Oa = {};
                try {
                    Oa._proto_ = Na;
                    Ma = Oa.a;
                    break a
                } catch (a) {}
                Ma = !1
            }
            La = Ma ? function(a, b) {
                a._proto_ = b;
                if (a._proto_ !== b)
                    throw new TypeError("b`" + a);
                return a
            }
            : null
        }
        var Pa = La
          , Qa = function(a, b) {
            a.prototype = Ka(b.prototype);
            a.prototype.constructor = a;
            if (Pa)
                Pa(a, b);
            else
                for (var c in b)
                    if (c != "prototype")
                        if (Object.defineProperties) {
                            var f = Object.getOwnPropertyDescriptor(b, c);
                            f && Object.defineProperty(a, c, f)
                        } else
                            a[c] = b[c];
            a.L = b.prototype
        }
          , H = function(a) {
            var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
            if (b)
                return b.call(a);
            if (typeof a.length == "number")
                return {
                    next: Ha(a)
                };
            throw Error("c`" + String(a));
        };
        Q("Promise", function(a) {
            function b() {
                this.g = null
            }
            function c(d) {
                return d instanceof e ? d : new e(function(g) {
                    g(d)
                }
                )
            }
            if (a)
                return a;
            b.prototype.h = function(d) {
                if (this.g == null) {
                    this.g = [];
                    var g = this;
                    this.i(function() {
                        g.m()
                    })
                }
                this.g.push(d)
            }
            ;
            var f = P.setTimeout;
            b.prototype.i = function(d) {
                f(d, 0)
            }
            ;
            b.prototype.m = function() {
                for (; this.g && this.g.length; ) {
                    var d = this.g;
                    this.g = [];
                    for (var g = 0; g < d.length; ++g) {
                        var h = d[g];
                        d[g] = null;
                        try {
                            h()
                        } catch (l) {
                            this.l(l)
                        }
                    }
                }
                this.g = null
            }
            ;
            b.prototype.l = function(d) {
                this.i(function() {
                    throw d;
                })
            }
            ;
            var e = function(d) {
                this.h = 0;
                this.i = void 0;
                this.g = [];
                this.v = !1;
                var g = this.l();
                try {
                    d(g.resolve, g.reject)
                } catch (h) {
                    g.reject(h)
                }
            };
            e.prototype.l = function() {
                function d(l) {
                    return function(p) {
                        h || (h = !0,
                        l.call(g, p))
                    }
                }
                var g = this
                  , h = !1;
                return {
                    resolve: d(this.C),
                    reject: d(this.m)
                }
            }
            ;
            e.prototype.C = function(d) {
                if (d === this)
                    this.m(new TypeError("d"));
                else if (d instanceof e)
                    this.F(d);
                else {
                    a: switch (typeof d) {
                    case "object":
                        var g = d != null;
                        break a;
                    case "function":
                        g = !0;
                        break a;
                    default:
                        g = !1
                    }
                    g ? this.B(d) : this.u(d)
                }
            }
            ;
            e.prototype.B = function(d) {
                var g = void 0;
                try {
                    g = d.then
                } catch (h) {
                    this.m(h);
                    return
                }
                typeof g == "function" ? this.G(g, d) : this.u(d)
            }
            ;
            e.prototype.m = function(d) {
                this.A(2, d)
            }
            ;
            e.prototype.u = function(d) {
                this.A(1, d)
            }
            ;
            e.prototype.A = function(d, g) {
                if (this.h != 0)
                    throw Error("e`" + d + "" + g + "" + this.h);
                this.h = d;
                this.i = g;
                this.h === 2 && this.D();
                this.I()
            }
            ;
            e.prototype.D = function() {
                var d = this;
                f(function() {
                    if (d.J()) {
                        var g = P.console;
                        typeof g !== "undefined" && g.error(d.i)
                    }
                }, 1)
            }
            ;
            e.prototype.J = function() {
                if (this.v)
                    return !1;
                var d = P.CustomEvent
                  , g = P.Event
                  , h = P.dispatchEvent;
                if (typeof h === "undefined")
                    return !0;
                typeof d === "function" ? d = new d("unhandledrejection",{
                    cancelable: !0
                }) : typeof g === "function" ? d = new g("unhandledrejection",{
                    cancelable: !0
                }) : (d = P.document.createEvent("CustomEvent"),
                d.initCustomEvent("unhandledrejection", !1, !0, d));
                d.promise = this;
                d.reason = this.i;
                return h(d)
            }
            ;
            e.prototype.I = function() {
                if (this.g != null) {
                    for (var d = 0; d < this.g.length; ++d)
                        k.h(this.g[d]);
                    this.g = null
                }
            }
            ;
            var k = new b;
            e.prototype.F = function(d) {
                var g = this.l();
                d.s(g.resolve, g.reject)
            }
            ;
            e.prototype.G = function(d, g) {
                var h = this.l();
                try {
                    d.call(g, h.resolve, h.reject)
                } catch (l) {
                    h.reject(l)
                }
            }
            ;
            e.prototype.then = function(d, g) {
                function h(m, z) {
                    return typeof m == "function" ? function(ha) {
                        try {
                            l(m(ha))
                        } catch (ia) {
                            p(ia)
                        }
                    }
                    : z
                }
                var l, p, N = new e(function(m, z) {
                    l = m;
                    p = z
                }
                );
                this.s(h(d, l), h(g, p));
                return N
            }
            ;
            e.prototype.catch = function(d) {
                return this.then(void 0, d)
            }
            ;
            e.prototype.s = function(d, g) {
                function h() {
                    switch (l.h) {
                    case 1:
                        d(l.i);
                        break;
                    case 2:
                        g(l.i);
                        break;
                    default:
                        throw Error("f`" + l.h);
                    }
                }
                var l = this;
                this.g == null ? k.h(h) : this.g.push(h);
                this.v = !0
            }
            ;
            e.resolve = c;
            e.reject = function(d) {
                return new e(function(g, h) {
                    h(d)
                }
                )
            }
            ;
            e.race = function(d) {
                return new e(function(g, h) {
                    for (var l = H(d), p = l.next(); !p.done; p = l.next())
                        c(p.value).s(g, h)
                }
                )
            }
            ;
            e.all = function(d) {
                var g = H(d)
                  , h = g.next();
                return h.done ? c([]) : new e(function(l, p) {
                    function N(ha) {
                        return function(ia) {
                            m[ha] = ia;
                            z--;
                            z == 0 && l(m)
                        }
                    }
                    var m = []
                      , z = 0;
                    do
                        m.push(void 0),
                        z++,
                        c(h.value).s(N(m.length - 1), p),
                        h = g.next();
                    while (!h.done)
                }
                )
            }
            ;
            return e
        });
        Q("Number.isFinite", function(a) {
            return a ? a : function(b) {
                return typeof b !== "number" ? !1 : !isNaN(b) && b !== Infinity && b !== -Infinity
            }
        });
        Q("Number.MAX_SAFE_INTEGER", function() {
            return 9007199254740991
        });
        Q("Number.MIN_SAFE_INTEGER", function() {
            return -9007199254740991
        });
        Q("Number.isInteger", function(a) {
            return a ? a : function(b) {
                return Number.isFinite(b) ? b === Math.floor(b) : !1
            }
        });
        Q("Number.isSafeInteger", function(a) {
            return a ? a : function(b) {
                return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER
            }
        });
        Q("Math.trunc", function(a) {
            return a ? a : function(b) {
                b = Number(b);
                if (isNaN(b) || b === Infinity || b === -Infinity || b === 0)
                    return b;
                var c = Math.floor(Math.abs(b));
                return b < 0 ? -c : c
            }
        });
        Q("Number.isNaN", function(a) {
            return a ? a : function(b) {
                return typeof b === "number" && isNaN(b)
            }
        });
        var r = this || self
          , Ra = r._F_toggles || [];
        var Sa = !!(Ra[0] & 2048);
        var Ta;
        if (Ra[0] & 1024)
            Ta = Sa;
        else {
            var R;
            a: {
                for (var Ua = ["WIZ_global_data", "oxN3nb"], S = r, Va = 0; Va < Ua.length; Va++)
                    if (S = S[Ua[Va]],
                    S == null) {
                        R = null;
                        break a
                    }
                R = S
            }
            var Wa = R && R[610401301];
            Ta = Wa != null ? Wa : !1
        }
        var aa = Ta;
        var n, Xa = r.navigator;
        n = Xa ? Xa.userAgentData || null : null;
        var Ya = u() ? !1 : t("Trident") || t("MSIE");
        !t("Android") || v();
        v();
        t("Safari") && (v() || (u() ? 0 : t("Coast")) || (u() ? 0 : t("Opera")) || (u() ? 0 : t("Edge")) || (u() ? q("Microsoft Edge") : t("Edg/")) || u() && q("Opera"));
        var Ba = {}
          , M = null;
        var za = typeof Uint8Array !== "undefined"
          , Aa = !Ya && typeof btoa === "function";
        var T = typeof Symbol === "function" && typeof Symbol() === "symbol", U;
        U = typeof Symbol === "function" && typeof Symbol() === "symbol" ? Symbol() : void 0;
        var Za = T ? function(a, b) {
            a[U] |= b
        }
        : function(a, b) {
            a.j !== void 0 ? a.j |= b : Object.defineProperties(a, {
                j: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        }
          , A = T ? function(a) {
            return a[U] | 0
        }
        : function(a) {
            return a.j | 0
        }
          , $a = T ? function(a) {
            return a[U]
        }
        : function(a) {
            return a.j
        }
          , ua = T ? function(a, b) {
            a[U] = b
        }
        : function(a, b) {
            a.j !== void 0 ? a.j = b : Object.defineProperties(a, {
                j: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        }
        ;
        var Ea = {}
          , ba = {};
        var ea = C(function(a) {
            return typeof a === "number"
        })
          , da = C(function(a) {
            return typeof a === "string"
        })
          , fa = C(function(a) {
            return typeof a === "boolean"
        });
        var D = typeof r.BigInt === "function" && typeof r.BigInt(0) === "bigint";
        var ya = C(function(a) {
            return D ? a >= ab && a <= bb : a[0] === "-" ? ja(a, cb) : ja(a, db)
        })
          , cb = Number.MIN_SAFE_INTEGER.toString()
          , ab = D ? BigInt(Number.MIN_SAFE_INTEGER) : void 0
          , db = Number.MAX_SAFE_INTEGER.toString()
          , bb = D ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
        var F = 0
          , G = 0;
        var na = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
        var eb = function(a, b, c) {
            var f = a.o
              , e = $a(f);
            if (e & 2)
                throw Error();
            a: {
                var k = e >> 15 & 1023 || 536870912;
                if (b >= k) {
                    var d = e;
                    if (e & 256)
                        var g = f[f.length - 1];
                    else {
                        if (c == null)
                            break a;
                        g = f[k + (+!!(e & 512) - 1)] = {};
                        d |= 256
                    }
                    g[b] = c;
                    b < k && (f[b + (+!!(e & 512) - 1)] = void 0);
                    d !== e && ua(f, d)
                } else
                    f[b + (+!!(e & 512) - 1)] = c,
                    e & 256 && (c = f[f.length - 1],
                    b in c && delete c[b])
            }
            return a
        }
          , fb = function(a) {
            var b = b === void 0 ? 0 : b;
            a = a.o;
            var c = $a(a)
              , f = c >> 15 & 1023 || 536870912;
            1 >= f ? a = c & 256 ? a[a.length - 1][1] : void 0 : (c = 1 + (+!!(c & 512) - 1),
            a = c < 0 || c >= a.length || c >= f ? void 0 : a[c]);
            a != null && (typeof a === "bigint" ? ya(a) ? a = Number(a) : (a = BigInt.asIntN(64, a),
            a = ya(a) ? Number(a) : String(a)) : a = oa(a) ? typeof a === "number" ? ra(a) : L(a) : void 0);
            return a != null ? a : b
        }
          , gb = function(a, b, c) {
            if (c != null) {
                if (typeof c !== "number")
                    throw w("int32");
                if (!Number.isFinite(c))
                    throw w("int32");
                c |= 0
            }
            eb(a, b, c)
        };
        var O, V = function(a, b, c) {
            this.o = va(a, b, c)
        };
        V.prototype.toJSON = function() {
            return Ga(this)
        }
        ;
        var hb = function(a) {
            try {
                return O = !0,
                JSON.stringify(Ga(a), xa)
            } finally {
                O = !1
            }
        };
        V.prototype.H = Ea;
        V.prototype.toString = function() {
            try {
                return O = !0,
                Ga(this).toString()
            } finally {
                O = !1
            }
        }
        ;
        var ib = function(a) {
            this.o = va(a)
        };
        Qa(ib, V);
        var jb = function(a) {
            this.o = va(a, 0, "identity.hfcr")
        };
        Qa(jb, V);
        var kb = function(a) {
            return function(b) {
                if (b == null || b == "")
                    b = new a;
                else {
                    b = JSON.parse(b);
                    if (!Array.isArray(b))
                        throw Error("p");
                    Za(b, 32);
                    b = new a(b)
                }
                return b
            }
        }(jb);
        var lb = function(a, b, c, f, e) {
            this.m = a;
            this.i = b;
            this.l = c;
            this.h = f;
            this.g = e
        };
        lb.prototype.start = function() {
            var a = this;
            if (typeof fetch !== "undefined")
                if (mb()) {
                    var b = nb()
                      , c = Date.now();
                    b && b > c + this.g * 1E3 && (b = Date.now() + this.g * 1E3,
                    W(b));
                    var f = function() {
                        ob(a).then(function() {
                            setTimeout(f, a.g * 1E3)
                        })
                    };
                    setTimeout(function() {
                        f()
                    }, b && b > c ? b - c : 0)
                } else
                    pb(this)
        }
        ;
        var pb = function(a) {
            qb(a).then(function() {
                var b = function() {
                    qb(a).then(function() {
                        setTimeout(b, a.g * 1E3)
                    })
                };
                setTimeout(function() {
                    b()
                }, a.g * 1E3)
            })
        }
          , qb = function(a) {
            var b = rb(a);
            return sb(b).then(function(c) {
                c = tb(fb(c));
                c !== a.g && (a.g = c)
            }).catch(function() {
                a.g *= 2
            })
        }
          , ob = function(a) {
            var b = nb();
            if (!b || Date.now() >= b) {
                var c = Math.floor(Math.random() * 1E3);
                return new Promise(function(f) {
                    setTimeout(function() {
                        var e = nb();
                        !e || Date.now() >= e ? f(ub(a)) : f()
                    }, c)
                }
                )
            }
            return Promise.resolve()
        }
          , sb = function(a) {
            a = {
                method: "POST",
                credentials: "same-origin",
                cache: "no-store",
                mode: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                },
                body: hb(a)
            };
            if (typeof AbortController !== "undefined") {
                var b = new AbortController;
                setTimeout(function() {
                    b.abort()
                }, 3E4);
                a.signal = b.signal
            }
            return fetch(new Request("/RotateCookies",a)).then(function(c) {
                return c.text()
            }).then(function(c) {
                return kb(JSON.stringify(JSON.parse(c.substring(5))[0]))
            })
        }
          , rb = function(a) {
            var b = new ib;
            var c = a.m;
            c = c == null ? c : sa(c);
            b = eb(b, 2, c);
            a.i !== 0 && gb(b, 1, a.i);
            a.l !== 0 && gb(b, 3, a.l);
            a.h !== 0 && gb(b, 4, a.h);
            return b
        }
          , ub = function(a) {
            W(Date.now() + a.g * 1E3);
            var b = rb(a);
            return sb(b).then(function(c) {
                c = tb(fb(c));
                c !== a.g && (W(Date.now() + c * 1E3),
                a.g = c)
            }).catch(function() {
                a.g *= 2;
                W(Date.now() + a.g * 1E3)
            })
        }
          , mb = function() {
            try {
                var a = window.localStorage;
                if (!a)
                    return !1;
                a.setItem("cookieRotationStorageAccessTest", "1");
                a.removeItem("cookieRotationStorageAccessTest");
                return !0
            } catch (b) {
                return !1
            }
        }
          , tb = function(a) {
            a < 60 && (a = 60);
            return a
        }
          , nb = function() {
            try {
                var a = window.localStorage.getItem("nextRotationAttemptTs");
                if (!a)
                    return null;
                var b = Math.floor(Number(a));
                return Number.isNaN(b) ? null : b
            } catch (c) {
                return null
            }
        }
          , W = function(a) {
            try {
                window.localStorage.setItem("nextRotationAttemptTs", a.toString())
            } catch (b) {}
        };
        var vb = function(a, b, c, f, e) {
            (new lb(a,b,c,f,e)).start()
        }
          , X = ["init"]
          , Y = r;
        X[0]in Y || typeof Y.execScript == "undefined" || Y.execScript("var " + X[0]);
        for (var Z; X.length && (Z = X.shift()); )
            X.length || vb === void 0 ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = vb;
    } catch (e) {
        _._DumpException(e)
    }
}
).call(this, this.default_IdentityRotateCookiesHttp);
// Google Inc.


// Define travel destinations and their attributes



















































// document.getElementById('travel-form').addEventListener('submit', function(event) {
//   event.preventDefault();


// const weather = document.querySelector('input[name="weather"]:checked').value;

  
// // Initialize suggestions array


// // Activity-based suggestions
// if( weather == 'cold'){

// }
result.onclick = ()=>{
  containers.classList.add('no');
  suggest1.classList.add('show');
  }

srinagar1.onclick = ()=>{
  suggest1.classList.remove('show');
  srinagar.classList.add('show');
}












// // script.js

//     // Get user input

   
//     if( weather == 'Cold'){
      
//       containers.style.display='none';
//       suggest1.style.display='block';
//       }
      
//     // Budget-based suggestions
  
  
//     // Transportation preferences
   
  
//     // Food preferences
    
  
//     // Display the result section
   
  
//   
  





