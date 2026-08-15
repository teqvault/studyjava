const modules = [
  // ========== MODULE 1 ==========
  {
    id: 0,
    number: "01",
    title: "Introduction to High Voltage Work & Safety Mindset",
    intro: "Before you touch a single piece of equipment, you need the right foundation. This module builds the safety mindset that will keep you alive and effective throughout your career.",
    objectives: [
      "Define what is generally considered high voltage",
      "Explain why high voltage work is fundamentally different from regular electrical work",
      "Identify the main ways people get seriously hurt in this trade",
      "Understand the core safety mindset required of every high voltage electrician",
      "Recognize the two most important safety standards you will work under"
    ],
    content: `
      <div class="section">
        <h2>1. What Is High Voltage?</h2>
        <p>In the electrical trade, <strong>high voltage</strong> generally means systems operating at <strong>1,000 volts AC or higher</strong> (or 1,500 volts DC and above).</p>
        <p>Many people loosely call anything over 600 V “high voltage,” but in the utility and industrial world we usually draw the line at 1 kV. Once you cross that threshold, the rules, tools, approach distances, and consequences all change dramatically.</p>
        <p>You will work on systems that can be:</p>
        <ul>
          <li>4,160 V</li>
          <li>12.47 kV / 13.8 kV</li>
          <li>25 kV / 34.5 kV</li>
          <li>69 kV and higher (transmission)</li>
        </ul>
        <p>Even “medium voltage” (typically 1 kV – 35 kV) is treated with the same seriousness as higher voltages because the energy available is still lethal.</p>
      </div>

      <div class="section">
        <h2>2. Why High Voltage Is Different</h2>
        <p>At residential and commercial voltages (120/240 V or 277/480 V), most of the danger comes from direct contact. At high voltage, several additional dangers appear:</p>
        <ul>
          <li><strong>Arc flash and arc blast</strong> become far more severe. The energy released can create a pressure wave strong enough to throw a person and temperatures hotter than the surface of the sun.</li>
          <li><strong>Approach distances</strong> become critical. You no longer have to touch something to get shocked — the electricity can jump through air (flashover).</li>
          <li><strong>Induced voltages</strong> can appear on de-energized lines and equipment simply because they are near energized circuits.</li>
          <li><strong>Step and touch potentials</strong> can kill you even if you never contact an energized conductor.</li>
          <li>Fault currents are much higher, so protective equipment and grounding practices become more complex.</li>
        </ul>
        <div class="callout callout-danger">
          <div class="callout-title">Critical Point</div>
          <p>The margin for error is much smaller, and the consequences of a mistake are much larger. There is no “almost safe” at high voltage.</p>
        </div>
      </div>

      <div class="section">
        <h2>3. How People Get Hurt</h2>
        <p>The majority of serious injuries and fatalities in high voltage work come from a relatively short list of causes:</p>
        <ol>
          <li>Working on or near energized equipment without proper clearance or protection</li>
          <li>Inadequate or missing temporary grounding</li>
          <li>Failure to maintain minimum approach distances</li>
          <li>Incorrect or incomplete switching / isolation</li>
          <li>Complacency (“I’ve done this a hundred times”)</li>
          <li>Poor communication between crew members or with the system operator</li>
          <li>Fatigue, rushing, or working under pressure during outages or storms</li>
        </ol>
        <p>Most of these are preventable with good habits and a strong safety culture.</p>
      </div>

      <div class="section">
        <h2>4. The Required Safety Mindset</h2>
        <p>As a new apprentice, your most important job is not technical skill — it is developing the right mindset. Experienced high voltage electricians share these traits:</p>
        <ul>
          <li>They treat every circuit as energized until they have personally proven it is not.</li>
          <li>They never skip steps in a procedure, even when they feel rushed.</li>
          <li>They speak up when something does not look or feel right.</li>
          <li>They understand that “good enough” is not acceptable when the consequences are life-altering.</li>
          <li>They respect the equipment and the energy it contains.</li>
        </ul>
        <div class="callout callout-info">
          <div class="callout-title">Field Reality</div>
          <p>This mindset is more important than any tool or technical knowledge you will learn. Skill without the right attitude gets people hurt.</p>
        </div>
      </div>

      <div class="section">
        <h2>5. Key Standards You Will Live By</h2>
        <p>Two documents form the foundation of safe high voltage work in the United States:</p>
        <p><strong>OSHA 1910.269</strong> – Covers electric power generation, transmission, and distribution. This is the law for utility and many industrial high voltage workers.</p>
        <p><strong>NFPA 70E</strong> – Standard for Electrical Safety in the Workplace. While not law itself, OSHA frequently uses it as the recognized industry practice for arc flash protection, approach boundaries, and establishing an electrically safe work condition.</p>
        <p>You will hear these referenced constantly. Over time you will become very familiar with both.</p>
      </div>

      <div class="section">
        <h2>6. Hierarchy of Controls</h2>
        <p>Always try to control hazards as high up this list as possible. PPE is important, but it is the <em>last</em> layer of protection, not the first.</p>
        
        <div class="diagram">
          <div class="diagram-title">Hierarchy of Controls (Most Effective → Least Effective)</div>
          <svg viewBox="0 0 420 280" width="420" height="280" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#22c55e"/>
                <stop offset="100%" stop-color="#16a34a"/>
              </linearGradient>
              <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#3b82f6"/>
                <stop offset="100%" stop-color="#2563eb"/>
              </linearGradient>
              <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#8b5cf6"/>
                <stop offset="100%" stop-color="#7c3aed"/>
              </linearGradient>
              <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#f59e0b"/>
                <stop offset="100%" stop-color="#d97706"/>
              </linearGradient>
              <linearGradient id="g5" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#ef4444"/>
                <stop offset="100%" stop-color="#dc2626"/>
              </linearGradient>
            </defs>
            <!-- Bars -->
            <rect x="60" y="10" width="300" height="42" rx="6" fill="url(#g1)"/>
            <rect x="85" y="62" width="250" height="42" rx="6" fill="url(#g2)"/>
            <rect x="110" y="114" width="200" height="42" rx="6" fill="url(#g3)"/>
            <rect x="135" y="166" width="150" height="42" rx="6" fill="url(#g4)"/>
            <rect x="160" y="218" width="100" height="42" rx="6" fill="url(#g5)"/>
            <!-- Labels -->
            <text x="210" y="37" text-anchor="middle" fill="white" font-size="13" font-weight="600" font-family="Inter,sans-serif">1. Elimination</text>
            <text x="210" y="89" text-anchor="middle" fill="white" font-size="13" font-weight="600" font-family="Inter,sans-serif">2. Substitution</text>
            <text x="210" y="141" text-anchor="middle" fill="white" font-size="13" font-weight="600" font-family="Inter,sans-serif">3. Engineering Controls</text>
            <text x="210" y="193" text-anchor="middle" fill="white" font-size="12" font-weight="600" font-family="Inter,sans-serif">4. Administrative</text>
            <text x="210" y="245" text-anchor="middle" fill="white" font-size="12" font-weight="600" font-family="Inter,sans-serif">5. PPE</text>
          </svg>
          <div class="diagram-caption">Always work from the top down. De-energize first whenever possible.</div>
        </div>
      </div>

      <div class="section">
        <h2>Common Mistakes New Apprentices Make</h2>
        <ul>
          <li>Assuming something is dead because someone else said it was</li>
          <li>Standing too close to energized equipment out of curiosity</li>
          <li>Not asking questions when they don’t understand a step</li>
          <li>Focusing only on the task and forgetting about what is happening around them</li>
          <li>Treating safety rules as optional when no one is watching</li>
        </ul>
      </div>

      <div class="takeaways">
        <h3>🔑 Key Takeaways</h3>
        <ul>
          <li>High voltage begins around 1,000 V and changes the entire nature of the work.</li>
          <li>The biggest dangers are arc flash, approach distances, induced voltages, and step/touch potentials.</li>
          <li>Most injuries come from preventable human errors and complacency.</li>
          <li>Your safety mindset is more important than your technical skill at this stage.</li>
          <li>OSHA 1910.269 and NFPA 70E are the two core standards you will work under.</li>
        </ul>
      </div>
    `,
    questions: [
      {
        q: "At what voltage level do we generally begin treating systems as high voltage?",
        options: ["600 V", "1,000 V AC (or 1,500 V DC)", "480 V", "15 kV"],
        answer: 1
      },
      {
        q: "Which of the following is the MOST effective control in the hierarchy of controls?",
        options: ["Wearing proper PPE", "Following written procedures", "Eliminating the hazard (de-energizing)", "Using insulated tools"],
        answer: 2
      },
      {
        q: "Why are approach distances critical at high voltage?",
        options: [
          "Because tools become magnetic",
          "Electricity can jump through air (flashover) without direct contact",
          "Only for voltages above 69 kV",
          "They only matter for transmission work"
        ],
        answer: 1
      },
      {
        q: "What should you do if a procedure step does not make sense to you?",
        options: [
          "Skip it if the rest of the crew is ready",
          "Ask questions and clarify before proceeding",
          "Assume it is not important",
          "Do it the way you saw someone else do it last time"
        ],
        answer: 1
      }
    ]
  },

  // ========== MODULE 2 ==========
  {
    id: 1,
    number: "02",
    title: "Electrical Theory Foundations",
    intro: "You cannot work safely or effectively on high voltage systems without a solid grasp of basic electrical theory. This module builds the foundation you will use every day.",
    objectives: [
      "Explain the difference between AC and DC and why most power systems use AC",
      "Describe what three-phase power is and why it is used",
      "Understand the relationship between voltage, current, and power",
      "Recognize the power triangle and the concept of power factor",
      "Read basic phasor relationships without advanced math"
    ],
    content: `
      <div class="section">
        <h2>1. AC vs DC — Quick Review</h2>
        <p><strong>Direct Current (DC)</strong> flows in one direction only. Batteries and solar panels produce DC. Substation control systems and battery banks also use DC.</p>
        <p><strong>Alternating Current (AC)</strong> reverses direction many times per second. In North America the standard frequency is 60 Hz (60 cycles per second). Almost all generation, transmission, and distribution systems use AC because it is easy to transform to different voltage levels with transformers.</p>
        <div class="callout callout-info">
          <div class="callout-title">Why AC Wins for Power Systems</div>
          <p>Transformers only work with AC (or changing current). Being able to step voltage up for efficient long-distance transmission and step it back down for use is the main reason the grid runs on AC.</p>
        </div>
      </div>

      <div class="section">
        <h2>2. Three-Phase Power</h2>
        <p>Almost all high voltage systems are three-phase. Instead of one alternating voltage, we have three voltages that are evenly spaced 120° apart in time.</p>
        <p>Think of three single-phase systems that are carefully timed so their peaks occur at different moments. This arrangement gives us several advantages:</p>
        <ul>
          <li>Power delivery is smoother (less pulsating)</li>
          <li>Motors run more efficiently and with less vibration</li>
          <li>We can transmit more power with less conductor material</li>
          <li>We can create rotating magnetic fields easily (important for motors and generators)</li>
        </ul>
        <p>The three phases are commonly called A, B, and C (or L1, L2, L3).</p>
      </div>

      <div class="section">
        <h2>3. Voltage, Current, and Power</h2>
        <p>These three quantities are the language of electrical work:</p>
        <ul>
          <li><strong>Voltage (V)</strong> — Electrical pressure. Measured in volts.</li>
          <li><strong>Current (I)</strong> — Flow of electrons. Measured in amperes (amps).</li>
          <li><strong>Power (P)</strong> — Rate of doing work. Measured in watts (or kilowatts / megawatts).</li>
        </ul>
        <p>In a simple DC circuit: <span class="font-mono">P = V × I</span></p>
        <p>In AC systems the relationship is more involved because voltage and current are not always in phase with each other.</p>
      </div>

      <div class="section">
        <h2>4. The Power Triangle</h2>
        <p>In AC circuits we deal with three kinds of power:</p>
        <ul>
          <li><strong>Real Power (P)</strong> — Measured in kW. This is the power that actually does useful work.</li>
          <li><strong>Reactive Power (Q)</strong> — Measured in kVAR. This is power that oscillates back and forth (needed by motors and transformers to create magnetic fields).</li>
          <li><strong>Apparent Power (S)</strong> — Measured in kVA. This is the total power the system must supply: <span class="font-mono">S = √(P² + Q²)</span></li>
        </ul>
        <p><strong>Power Factor</strong> is the ratio of real power to apparent power (P / S). A power factor of 1.0 is ideal. Low power factor means the system is carrying extra current that does no useful work.</p>
        
        <div class="diagram">
          <div class="diagram-title">Power Triangle</div>
          <svg viewBox="0 0 360 220" width="360" height="220" xmlns="http://www.w3.org/2000/svg">
            <!-- Triangle -->
            <polygon points="40,180 280,180 280,50" fill="none" stroke="#3b82f6" stroke-width="3"/>
            <!-- Labels -->
            <text x="160" y="200" text-anchor="middle" fill="#8b9bb4" font-size="14" font-family="Inter,sans-serif">Real Power (kW) →</text>
            <text x="300" y="120" text-anchor="start" fill="#8b9bb4" font-size="14" font-family="Inter,sans-serif">Reactive</text>
            <text x="300" y="138" text-anchor="start" fill="#8b9bb4" font-size="14" font-family="Inter,sans-serif">(kVAR)</text>
            <text x="140" y="100" text-anchor="middle" fill="#3b82f6" font-size="14" font-weight="600" font-family="Inter,sans-serif" transform="rotate(-30 140 100)">Apparent (kVA)</text>
            <text x="80" y="160" fill="#22c55e" font-size="13" font-family="Inter,sans-serif">θ (angle)</text>
          </svg>
          <div class="diagram-caption">Power Factor = cos(θ) = Real Power ÷ Apparent Power</div>
        </div>
      </div>

      <div class="section">
        <h2>5. Basic Phasor Idea</h2>
        <p>A <strong>phasor</strong> is just a way to show the magnitude and timing (phase angle) of an AC quantity using an arrow. The length of the arrow represents size (voltage or current). The direction represents the timing relative to other quantities.</p>
        <p>In a balanced three-phase system the three phase voltages are drawn 120° apart. This simple picture helps you understand why line-to-line voltage is √3 times the phase-to-neutral voltage — something we will use heavily in the next module on transformers.</p>
        <div class="callout callout-warning">
          <div class="callout-title">Apprentice Tip</div>
          <p>You do not need to become a mathematician. You do need to become comfortable with the idea that voltages and currents have both size and timing, and that this timing difference matters.</p>
        </div>
      </div>

      <div class="takeaways">
        <h3>🔑 Key Takeaways</h3>
        <ul>
          <li>Most power systems use AC because transformers require changing current.</li>
          <li>Three-phase power is smoother, more efficient, and is the standard for HV systems.</li>
          <li>Real power does work; reactive power supports magnetic fields; apparent power is what the system must deliver.</li>
          <li>Power factor tells you how effectively current is being used.</li>
          <li>Phasors are a visual tool for understanding magnitude and phase relationships.</li>
        </ul>
      </div>
    `,
    questions: [
      {
        q: "Why do almost all high-voltage transmission and distribution systems use AC instead of DC?",
        options: [
          "AC is safer",
          "Transformers only work with AC (or changing current)",
          "DC cannot travel long distances",
          "Generators can only produce AC"
        ],
        answer: 1
      },
      {
        q: "In a three-phase system, how many degrees apart are the phases?",
        options: ["90°", "120°", "180°", "360°"],
        answer: 1
      },
      {
        q: "What does a power factor of 1.0 mean?",
        options: [
          "The system is overloaded",
          "All power is reactive",
          "Real power equals apparent power (ideal)",
          "There is no voltage"
        ],
        answer: 2
      }
    ]
  },

  // ========== MODULE 3 ==========
  {
    id: 2,
    number: "03",
    title: "Transformer Theory & Connections",
    intro: "Transformers are the heart of the power system. Understanding how they work and how their windings are connected (delta vs wye) is essential knowledge for every high voltage electrician.",
    objectives: [
      "Explain how a transformer changes voltage using the turns ratio",
      "Describe the difference between wye and delta connections",
      "Explain why a wye system produces 120/208 V style voltages",
      "Explain why a center-tapped delta produces 120/240 V with a high leg",
      "Recognize the practical implications of each connection type in the field"
    ],
    content: `
      <div class="section">
        <h2>1. How Transformers Work</h2>
        <p>A transformer transfers electrical energy from one circuit to another using a magnetic field. It has at least two windings: a <strong>primary</strong> (input) and a <strong>secondary</strong> (output).</p>
        <p>The voltage relationship is determined by the <strong>turns ratio</strong>:</p>
        <div class="mono-block">V<sub>secondary</sub> / V<sub>primary</sub> = N<sub>secondary</sub> / N<sub>primary</sub></div>
        <p>If the secondary has fewer turns than the primary, the transformer steps voltage down. If it has more turns, it steps voltage up. Current changes in the opposite direction so that power (ignoring losses) stays roughly the same.</p>
        <div class="callout callout-info">
          <div class="callout-title">Key Insight</div>
          <p>Transformers only work with changing current (AC). A steady DC voltage produces a steady magnetic field and no continuous transfer of energy.</p>
        </div>
      </div>

      <div class="section">
        <h2>2. Three-Phase Connections: Wye vs Delta</h2>
        <p>For three-phase systems we connect three windings (or three single-phase transformers) in one of two main ways:</p>
        <p><strong>Wye (Star) connection</strong> — One end of each winding is connected together at a common neutral point. The other ends become the three phase conductors.</p>
        <p><strong>Delta connection</strong> — The three windings are connected in a closed triangle. There is no natural neutral.</p>
      </div>

      <div class="section">
        <h2>3. Why Wye Gives 120/208 V Style Systems</h2>
        <p>In a wye connection the three phase-to-neutral voltages are 120° apart. When you measure between any two phases you are looking at the vector difference of two voltages that are not in phase.</p>
        <p>The math works out to:</p>
        <div class="mono-block">V<sub>Line-to-Line</sub> = V<sub>Line-to-Neutral</sub> × √3
≈ V<sub>LN</sub> × 1.732</div>
        <p>So if each winding produces 120 V to neutral:</p>
        <div class="mono-block">120 × 1.732 ≈ 208 V</div>
        <p>That is why we call it a <strong>120/208 V</strong> system. You get useful 120 V for lights and receptacles from any phase to neutral, and 208 V phase-to-phase for three-phase equipment.</p>
        <p>All three phases look the same relative to the neutral — this is a big advantage for balancing single-phase loads.</p>
      </div>

      <div class="section">
        <h2>4. Why Delta Often Gives 120/240 V (High-Leg) Systems</h2>
        <p>A pure delta has no neutral — every voltage is phase-to-phase. A common way to get 120 V single-phase service from a delta is to <strong>center-tap one of the three windings</strong> and ground that center tap.</p>
        <p>This creates the classic <strong>high-leg (wild-leg) delta</strong>:</p>
        <ul>
          <li>Across the center-tapped winding: 240 V, with 120 V from each end to the center tap (neutral)</li>
          <li>The other two phase-to-phase voltages remain 240 V</li>
          <li>The third phase (opposite the center-tapped winding) measures approximately <strong>208 V to neutral</strong></li>
        </ul>
        <div class="mono-block">V<sub>high-leg</sub> = 120 × √3 ≈ 208 V
(or √(240² − 120²) ≈ 208 V)</div>
        <p>This is why people say “delta is 120/240” while “wye is 120/208.”</p>
        
        <div class="callout callout-danger">
          <div class="callout-title">Critical Field Rule</div>
          <p>Never connect 120 V loads to the high leg. It is usually marked orange. Connecting a standard 120 V load to it will damage the equipment and create a serious hazard.</p>
        </div>
      </div>

      <div class="section">
        <h2>5. Practical Comparison</h2>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Wye (120/208)</th>
                <th>High-Leg Delta (120/240)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Phase-to-neutral voltages</td>
                <td>All three the same (120 V)</td>
                <td>Two at 120 V, one at 208 V</td>
              </tr>
              <tr>
                <td>Phase-to-phase voltages</td>
                <td>208 V</td>
                <td>240 V</td>
              </tr>
              <tr>
                <td>Neutral availability</td>
                <td>Excellent — available on all phases</td>
                <td>Limited to the center-tapped winding</td>
              </tr>
              <tr>
                <td>Single-phase 120 V loads</td>
                <td>Can be balanced across any phase</td>
                <td>Must stay off the high leg</td>
              </tr>
              <tr>
                <td>Three-phase motors</td>
                <td>See 208 V</td>
                <td>See full 240 V</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="section">
        <h2>6. Why This Matters on the Job</h2>
        <ul>
          <li>On a 120/208 V wye panel every phase-to-neutral is 120 V — predictable and safe for standard loads.</li>
          <li>On a high-leg delta you must identify and mark the high leg and keep 120 V loads away from it.</li>
          <li>The √3 relationship appears constantly in three-phase calculations (voltage, current, power, impedance).</li>
          <li>Choosing the wrong connection or misidentifying the system can destroy equipment or create unsafe conditions.</li>
        </ul>
      </div>

      <div class="takeaways">
        <h3>🔑 Key Takeaways</h3>
        <ul>
          <li>Transformer voltage ratio follows the turns ratio.</li>
          <li>Wye connections give a natural neutral and the √3 relationship (120 → 208).</li>
          <li>Center-tapped delta gives true 240 V three-phase plus 120 V single-phase, but creates a high leg at ~208 V to neutral.</li>
          <li>Always identify the system type before connecting loads.</li>
          <li>Never land 120 V loads on a high leg.</li>
        </ul>
      </div>
    `,
    questions: [
      {
        q: "In a wye system, if the phase-to-neutral voltage is 120 V, what is the approximate phase-to-phase voltage?",
        options: ["120 V", "180 V", "208 V", "240 V"],
        answer: 2
      },
      {
        q: "In a high-leg delta system, what is the voltage from the high leg to neutral?",
        options: ["120 V", "208 V", "240 V", "480 V"],
        answer: 1
      },
      {
        q: "Why must you never connect standard 120 V loads to the high leg?",
        options: [
          "It has no current capacity",
          "It measures approximately 208 V to neutral and will damage 120 V equipment",
          "It is not grounded",
          "It is only for three-phase loads"
        ],
        answer: 1
      },
      {
        q: "What is the main advantage of a wye connection for single-phase loads?",
        options: [
          "Higher voltage",
          "All three phases present the same voltage to neutral, making balancing easier",
          "No neutral is required",
          "It produces more reactive power"
        ],
        answer: 1
      }
    ]
  },

  // ========== MODULE 4 ==========
  {
    id: 3,
    number: "04",
    title: "High Voltage Equipment Overview",
    intro: "You need to recognize the major pieces of equipment you will see in substations and on the system, and understand what each one does.",
    objectives: [
      "Identify the main types of high voltage circuit breakers and their purposes",
      "Explain the difference between a circuit breaker and a disconnect switch",
      "Describe the role of power transformers and instrument transformers",
      "Recognize surge arresters and basic protection devices",
      "Understand the basic function of switchgear"
    ],
    content: `
      <div class="section">
        <h2>1. Circuit Breakers</h2>
        <p>A circuit breaker is designed to <strong>interrupt fault current</strong>. It can open under load and under fault conditions. This is its primary job — protecting the system by clearing short circuits and overloads.</p>
        <p>Common types you will encounter:</p>
        <ul>
          <li><strong>Vacuum breakers</strong> — Very common at medium voltage. The arc is extinguished in a vacuum bottle.</li>
          <li><strong>SF₆ (sulfur hexafluoride) breakers</strong> — Used at higher voltages. SF₆ is an excellent insulating and arc-quenching gas (but is a potent greenhouse gas, so handling rules are strict).</li>
          <li><strong>Oil breakers</strong> — Older technology still found in many places. The arc is quenched in insulating oil.</li>
          <li><strong>Air-blast breakers</strong> — Less common today; use a blast of compressed air to extinguish the arc.</li>
        </ul>
        <div class="callout callout-info">
          <div class="callout-title">Field Note</div>
          <p>Breakers have ratings for continuous current and for interrupting capacity (how much fault current they can safely clear). Never apply a breaker beyond its ratings.</p>
        </div>
      </div>

      <div class="section">
        <h2>2. Disconnect Switches (Isolators)</h2>
        <p>Disconnect switches are primarily for <strong>isolation</strong> — creating a visible open point so workers can see that a circuit is separated from the source. Most disconnects are <em>not</em> designed to interrupt load current or fault current.</p>
        <p>Rule of thumb: Open the circuit breaker first, then open the disconnect. Close the disconnect first, then close the breaker. Never open a disconnect under load unless it is specifically rated as a load-break switch.</p>
      </div>

      <div class="section">
        <h2>3. Power Transformers</h2>
        <p>Power transformers change voltage levels so power can be transmitted efficiently at high voltage and then stepped down for use. They are large, expensive, and critical assets.</p>
        <p>Key things to know as an apprentice:</p>
        <ul>
          <li>They have primary and secondary windings and a magnetic core.</li>
          <li>Many have tap changers (on-load or off-load) to adjust voltage.</li>
          <li>They are filled with insulating oil (or are dry-type in some applications).</li>
          <li>They need cooling (radiators, fans, pumps) and protection (sudden pressure, Buchholz, differential relays, etc.).</li>
        </ul>
      </div>

      <div class="section">
        <h2>4. Instrument Transformers</h2>
        <p><strong>Current Transformers (CTs)</strong> step primary current down to a standard secondary value (usually 5 A or 1 A) so meters and relays can measure it safely.</p>
        <p><strong>Potential (Voltage) Transformers (PTs or VTs)</strong> step primary voltage down to a standard secondary value (often 120 V) for metering and relaying.</p>
        <div class="callout callout-danger">
          <div class="callout-title">Critical Safety Rule</div>
          <p>Never open-circuit a CT secondary while the primary is energized. Extremely high voltages can appear and can kill or destroy the CT. Always short the secondary before disconnecting meters or relays.</p>
        </div>
      </div>

      <div class="section">
        <h2>5. Surge Arresters</h2>
        <p>Surge arresters protect equipment from overvoltages caused by lightning or switching surges. They sit between the phase conductor and ground and conduct only when voltage exceeds a designed level, then seal off again.</p>
      </div>

      <div class="section">
        <h2>6. Switchgear</h2>
        <p>Switchgear is the assembly of breakers, disconnects, buswork, CTs, PTs, and controls in a metal enclosure (or outdoor structure). It is the “switchboard” of the high voltage world. You will spend a lot of time working in and around switchgear.</p>
      </div>

      <div class="takeaways">
        <h3>🔑 Key Takeaways</h3>
        <ul>
          <li>Circuit breakers interrupt fault current; disconnects provide visible isolation.</li>
          <li>Power transformers change voltage levels; instrument transformers (CTs/PTs) provide safe signals for metering and protection.</li>
          <li>Never open a CT secondary under load.</li>
          <li>Surge arresters protect against lightning and switching surges.</li>
          <li>Switchgear packages the major switching and protection devices together.</li>
        </ul>
      </div>
    `,
    questions: [
      {
        q: "What is the primary purpose of a circuit breaker?",
        options: [
          "To provide a visible open point",
          "To interrupt load and fault current",
          "To step voltage down",
          "To measure current"
        ],
        answer: 1
      },
      {
        q: "What is the critical safety rule regarding current transformers (CTs)?",
        options: [
          "Never short the secondary",
          "Never open-circuit the secondary while the primary is energized",
          "They can only be used on delta systems",
          "They must be grounded on both sides"
        ],
        answer: 1
      },
      {
        q: "What is the main purpose of a disconnect switch?",
        options: [
          "To interrupt fault current",
          "To provide visible isolation",
          "To regulate voltage",
          "To measure power factor"
        ],
        answer: 1
      }
    ]
  },

  // ========== MODULE 5 ==========
  {
    id: 4,
    number: "05",
    title: "Grounding, Bonding & Induced Voltage Hazards",
    intro: "Grounding is one of the most important (and most misunderstood) topics in high voltage work. This module covers why we ground, how temporary grounding works, and the hidden danger of induced voltages.",
    objectives: [
      "Explain why grounding is critical at high voltage",
      "Describe the purpose of temporary protective grounding",
      "Recognize step and touch potential hazards",
      "Understand how induced voltages appear on de-energized equipment",
      "Apply the concept of equipotential zones"
    ],
    content: `
      <div class="section">
        <h2>1. Why Grounding Matters</h2>
        <p>At high voltage, grounding serves several critical purposes:</p>
        <ul>
          <li>It provides a low-impedance path for fault current so protective devices can operate quickly.</li>
          <li>It stabilizes voltage during normal operation and during faults.</li>
          <li>It reduces the risk of electric shock by limiting voltage differences between objects a person might touch.</li>
        </ul>
        <p>Substations have extensive grounding grids buried in the earth. Everything metal that a person might touch is bonded to that grid so that everything rises to roughly the same potential during a fault.</p>
      </div>

      <div class="section">
        <h2>2. Temporary Protective Grounding</h2>
        <p>When you work on de-energized lines or equipment, you apply temporary grounds. These grounds do three important things:</p>
        <ol>
          <li>They drain any residual or induced charge.</li>
          <li>They create a short circuit so that if the circuit is accidentally re-energized, the resulting fault current will trip upstream protection very quickly.</li>
          <li>They help create an equipotential zone at the work location.</li>
        </ol>
        <div class="callout callout-warning">
          <div class="callout-title">Order Matters</div>
          <p>Always test for voltage first. Then apply grounds. Remove grounds last, after the work is complete and before re-energizing. Never assume a circuit is dead without testing.</p>
        </div>
      </div>

      <div class="section">
        <h2>3. Step and Touch Potentials</h2>
        <p><strong>Touch potential</strong> is the voltage difference between your hand (touching an energized or faulted object) and your feet.</p>
        <p><strong>Step potential</strong> is the voltage difference between your two feet when the ground itself has a voltage gradient (common during faults near a grounding point).</p>
        <p>Both can be lethal. This is why equipotential mats, proper bonding, and staying within controlled zones matter.</p>
      </div>

      <div class="section">
        <h2>4. Induced Voltages — The Hidden Hazard</h2>
        <p>Even when a line or cable is isolated and visibly grounded, it can still carry dangerous voltage. Parallel energized circuits induce voltage through magnetic and capacitive coupling.</p>
        <p>This is especially common on transmission corridors where multiple circuits share the same right-of-way, and on long underground cables.</p>
        <p>Safe work methods include:</p>
        <ul>
          <li>Proper application of temporary grounds at the work site</li>
          <li>Creating an equipotential work zone</li>
          <li>Understanding when insulated working methods are required</li>
          <li>Never assuming “it’s grounded so it’s safe” without considering induction</li>
        </ul>
        <div class="callout callout-danger">
          <div class="callout-title">Real Hazard</div>
          <p>Workers have been injured by induced voltages on lines that were properly isolated and grounded at the terminals but not properly bonded at the work location. Treat induction as a real and present danger.</p>
        </div>
      </div>

      <div class="section">
        <h2>5. Equipotential Zones</h2>
        <p>The goal of good grounding practice at the work site is to keep everything the worker can touch at the same potential. If your hands, feet, and the conductor are all at the same voltage, current does not flow through your body even if the voltage relative to remote earth is high.</p>
        <p>This is why we use equipotential mats, cluster bars, and careful bonding of structures, trucks, and conductors.</p>
      </div>

      <div class="takeaways">
        <h3>🔑 Key Takeaways</h3>
        <ul>
          <li>Grounding stabilizes voltage, helps clear faults, and reduces shock risk.</li>
          <li>Temporary grounds protect against accidental re-energization and induction.</li>
          <li>Step and touch potentials can kill even without direct contact with an energized conductor.</li>
          <li>Induced voltages are a real hazard on de-energized equipment near live circuits.</li>
          <li>Equipotential bonding at the work location is one of your best protections.</li>
        </ul>
      </div>
    `,
    questions: [
      {
        q: "What is the main purpose of temporary protective grounds?",
        options: [
          "To increase system voltage",
          "To drain charge, create a short for protection to operate, and help form an equipotential zone",
          "To replace the substation ground grid",
          "To measure current"
        ],
        answer: 1
      },
      {
        q: "What is step potential?",
        options: [
          "Voltage between hand and foot",
          "Voltage difference between a worker’s two feet caused by a ground voltage gradient",
          "Voltage on a step-down transformer",
          "The voltage rating of a ladder"
        ],
        answer: 1
      },
      {
        q: "Why can a properly isolated and terminal-grounded line still be dangerous?",
        options: [
          "Because grounds always fail",
          "Induced voltages from nearby energized circuits can still appear on the line",
          "Only if it is raining",
          "It cannot be dangerous if grounded"
        ],
        answer: 1
      }
    ]
  },

  // ========== MODULE 6 ==========
  {
    id: 5,
    number: "06",
    title: "Safe Work Practices & Switching Basics",
    intro: "Safe work on high voltage systems depends on disciplined procedures. This module covers the core practices that keep people alive.",
    objectives: [
      "List the steps to establish an electrically safe work condition",
      "Explain the purpose of switching orders and clearances",
      "Understand minimum approach distances at a basic level",
      "Describe proper lockout/tagout application in HV environments",
      "Recognize the importance of communication with system operators"
    ],
    content: `
      <div class="section">
        <h2>1. Establishing an Electrically Safe Work Condition</h2>
        <p>This is the gold standard. Whenever possible, work is performed only after the equipment has been put into an electrically safe work condition. The basic steps are:</p>
        <ol>
          <li>Identify all possible sources of electrical supply.</li>
          <li>Interrupt the load and open the disconnecting devices for each source.</li>
          <li>Visually verify that blades are open where possible.</li>
          <li>Apply lockout/tagout devices.</li>
          <li>Test for absence of voltage with an adequately rated tester.</li>
          <li>Apply temporary protective grounds where required.</li>
        </ol>
        <div class="callout callout-info">
          <div class="callout-title">NFPA 70E Principle</div>
          <p>Working on energized equipment is the exception, not the rule. De-energize unless there is a clear, justified reason that makes de-energizing infeasible or creates a greater hazard.</p>
        </div>
      </div>

      <div class="section">
        <h2>2. Switching Orders and Clearances</h2>
        <p>High voltage switching is rarely done “on the fly.” It is planned, written, and often reviewed by more than one person.</p>
        <p>A <strong>switching order</strong> (or switching program) is a step-by-step sequence for isolating equipment or restoring it to service. Each step is executed and checked off.</p>
        <p>A <strong>clearance</strong> (or hold order / permit) is formal authorization that the equipment is isolated and tagged so that work can proceed safely. Only the person who holds the clearance (or their designated representative) can release it.</p>
        <p>As an apprentice you will learn to follow these documents precisely. Never invent your own sequence.</p>
      </div>

      <div class="section">
        <h2>3. Minimum Approach Distances (MAD)</h2>
        <p>Even when equipment is energized, qualified workers may need to work near it. Minimum Approach Distances define how close you (and any conductive object you are holding) may come to exposed energized parts.</p>
        <p>These distances increase with voltage. They also depend on whether you are using live-line tools or working from an aerial lift, and on altitude in some cases.</p>
        <p>Your employer will provide the tables and training specific to the voltages you work on. Memorizing every number is less important than respecting the concept and knowing where to look up the required distance.</p>
      </div>

      <div class="section">
        <h2>4. Lockout/Tagout in High Voltage Environments</h2>
        <p>LOTO in substations and on power systems often involves more than a simple padlock on a breaker handle. It can include:</p>
        <ul>
          <li>Physical locks on disconnect mechanisms</li>
          <li>Tags with clear identification of who applied them and why</li>
          <li>Rack-out of breakers with locks on the racking mechanism</li>
          <li>Removal of fuses or control power</li>
          <li>Grounding switches locked in the closed position</li>
        </ul>
        <p>Only the person who applied a lock should remove it (with limited, controlled exceptions under specific procedures).</p>
      </div>

      <div class="section">
        <h2>5. Communication with System Operators</h2>
        <p>Many high voltage systems are controlled by a system operator or dispatch center. Switching is often done under their direction or with their knowledge.</p>
        <p>Clear, three-way communication is essential:</p>
        <ul>
          <li>Operator issues or confirms the order</li>
          <li>Field worker repeats it back</li>
          <li>Operator confirms the repeat-back is correct</li>
        </ul>
        <p>Never assume. Never rush the communication. A misunderstood switching step has caused major incidents.</p>
      </div>

      <div class="takeaways">
        <h3>🔑 Key Takeaways</h3>
        <ul>
          <li>Establish an electrically safe work condition whenever possible — de-energize first.</li>
          <li>Follow written switching orders and clearance procedures exactly.</li>
          <li>Respect minimum approach distances; look up the required values for the voltage you are working near.</li>
          <li>LOTO in HV environments is more complex than simple padlocks — learn the local system.</li>
          <li>Clear communication with operators and crew members prevents serious errors.</li>
        </ul>
      </div>
    `,
    questions: [
      {
        q: "What is the preferred way to work on high voltage equipment?",
        options: [
          "Work it energized with proper PPE",
          "Establish an electrically safe work condition (de-energize, lock, test, ground)",
          "Work at night when load is lower",
          "Only use hot sticks"
        ],
        answer: 1
      },
      {
        q: "Why is three-way communication used with system operators?",
        options: [
          "It is required by the radio manufacturer",
          "To ensure the order was heard and understood correctly before action is taken",
          "Only for emergency switching",
          "It is optional"
        ],
        answer: 1
      },
      {
        q: "When should temporary grounds be applied?",
        options: [
          "Before testing for voltage",
          "After the circuit has been isolated, locked, and tested for absence of voltage",
          "Only on transmission lines",
          "After the work is finished"
        ],
        answer: 1
      }
    ]
  },

  // ========== MODULE 7 ==========
  {
    id: 6,
    number: "07",
    title: "Basic Testing & Diagnostics",
    intro: "Testing tells you the condition of equipment and verifies that circuits are safe to work on. This module introduces the tests you will see most often as an apprentice.",
    objectives: [
      "Explain the purpose of insulation resistance testing",
      "Describe how to verify absence of voltage",
      "Recognize common additional tests (hi-pot, thermography, etc.)",
      "Understand what basic test results indicate",
      "Identify common testing mistakes"
    ],
    content: `
      <div class="section">
        <h2>1. Voltage Verification (Absence of Voltage Testing)</h2>
        <p>Before you touch anything that was previously energized, you must prove it is dead. This is done with a voltage detector or meter rated for the system voltage.</p>
        <p>Best practice:</p>
        <ol>
          <li>Test the tester on a known live source.</li>
          <li>Test the circuit you intend to work on (all phases and phase-to-ground).</li>
          <li>Test the tester again on the known live source to confirm it still works.</li>
        </ol>
        <div class="callout callout-danger">
          <div class="callout-title">Live-Dead-Live</div>
          <p>This “live-dead-live” sequence proves both that the circuit is de-energized and that your tester is functioning. Skipping it has killed people.</p>
        </div>
      </div>

      <div class="section">
        <h2>2. Insulation Resistance Testing (Megger)</h2>
        <p>An insulation resistance tester (commonly called a megger) applies a DC voltage and measures the resistance of the insulation in megohms.</p>
        <p>It is used on motors, cables, transformers, and switchgear to detect moisture, contamination, or deteriorating insulation.</p>
        <p>General rules of thumb exist (e.g., 1 megohm per kV plus 1 megohm), but manufacturer values and historical trends for that specific piece of equipment are more important than any single number.</p>
      </div>

      <div class="section">
        <h2>3. Other Common Tests You Will See</h2>
        <ul>
          <li><strong>Hi-pot (high potential) testing</strong> — Applies a higher-than-normal voltage to check dielectric strength. Used carefully and with proper procedures.</li>
          <li><strong>Transformer turns ratio (TTR)</strong> — Verifies that the turns ratio is correct and that windings are intact.</li>
          <li><strong>Contact resistance</strong> — Measures the resistance across breaker or switch contacts. High resistance means heat and potential failure.</li>
          <li><strong>Breaker timing</strong> — Measures how fast a breaker opens and closes.</li>
          <li><strong>Thermography (infrared)</strong> — Finds hot spots caused by loose connections, overloaded equipment, or failing components while the system is energized.</li>
          <li><strong>Power factor / dissipation factor</strong> — Evaluates the condition of insulation in transformers and bushings.</li>
        </ul>
      </div>

      <div class="section">
        <h2>4. Interpreting Results and Common Mistakes</h2>
        <p>Good testing is not just collecting numbers — it is understanding what they mean in context.</p>
        <ul>
          <li>Compare readings to previous tests on the same equipment when possible.</li>
          <li>Temperature and humidity affect insulation resistance readings.</li>
          <li>Always follow the manufacturer’s and your company’s procedures for test voltages and acceptance criteria.</li>
          <li>Never hi-pot equipment that is not designed for it or that has known solid insulation problems without proper evaluation.</li>
        </ul>
        <div class="callout callout-warning">
          <div class="callout-title">Apprentice Mistake to Avoid</div>
          <p>Using a low-voltage tester on a medium- or high-voltage system, or using a tester that is not rated for the voltage. Always check the rating of your instrument.</p>
        </div>
      </div>

      <div class="takeaways">
        <h3>🔑 Key Takeaways</h3>
        <ul>
          <li>Always prove absence of voltage with a properly rated tester using the live-dead-live method.</li>
          <li>Insulation resistance testing helps find moisture and deteriorating insulation.</li>
          <li>Many specialized tests exist; learn what each one is telling you.</li>
          <li>Trends and manufacturer data matter more than a single reading in isolation.</li>
          <li>Using the wrong tester or the wrong procedure can create hazards instead of revealing them.</li>
        </ul>
      </div>
    `,
    questions: [
      {
        q: "What is the recommended sequence for verifying a circuit is de-energized?",
        options: [
          "Test the circuit only",
          "Live – Dead – Live (test tester, test circuit, re-test tester)",
          "Dead – Live only",
          "Visual inspection is enough"
        ],
        answer: 1
      },
      {
        q: "What does an insulation resistance test (megger) primarily evaluate?",
        options: [
          "Current carrying capacity",
          "Condition of the insulation",
          "Power factor of the load",
          "Transformer turns ratio"
        ],
        answer: 1
      },
      {
        q: "Why is thermography useful?",
        options: [
          "It measures exact current values",
          "It finds hot spots while equipment is energized",
          "It replaces the need for grounding",
          "It only works on de-energized equipment"
        ],
        answer: 1
      }
    ]
  },

  // ========== MODULE 8 ==========
  {
    id: 7,
    number: "08",
    title: "Working in the Field — Substations & Lines",
    intro: "This module gives you a practical orientation to the two main environments you will work in: substations and power lines (overhead and underground).",
    objectives: [
      "Describe the basic flow of power through a typical substation",
      "Recognize major substation components in context",
      "Understand high-level differences between overhead and underground systems",
      "Identify key hazards unique to each environment",
      "Apply good communication and situational awareness practices in the field"
    ],
    content: `
      <div class="section">
        <h2>1. Typical Substation Power Flow</h2>
        <p>Power generally flows through a substation in this order:</p>
        <ol>
          <li>Incoming transmission or sub-transmission lines</li>
          <li>Disconnect switches and circuit breakers</li>
          <li>Power transformers (voltage is stepped down)</li>
          <li>Medium-voltage bus and switchgear</li>
          <li>Outgoing distribution feeders</li>
        </ol>
        <p>Along the way you will also find CTs, PTs, surge arresters, capacitor banks, reactors, and the control house with relays, batteries, and SCADA equipment.</p>
        <p>Learning to read a one-line diagram of the substation is one of the most valuable skills you can develop early.</p>
      </div>

      <div class="section">
        <h2>2. Substation Hazards and Habits</h2>
        <ul>
          <li>High fault current levels — arc flash energy can be extreme.</li>
          <li>Multiple voltage levels in one yard (transmission, distribution, station service).</li>
          <li>Vehicle and equipment movement — stay visible and communicate.</li>
          <li>Ground grid and step/touch potential awareness during faults.</li>
          <li>SF₆ equipment and oil-filled equipment environmental and safety rules.</li>
        </ul>
        <p>Good habits: keep your head on a swivel, know the status of every breaker and switch near you, and never walk under energized buses without knowing the clearances.</p>
      </div>

      <div class="section">
        <h2>3. Overhead Lines</h2>
        <p>Overhead construction uses poles or towers, insulators, conductors, and often overhead ground wires (static wires) for lightning protection.</p>
        <p>Key awareness points for apprentices:</p>
        <ul>
          <li>Minimum approach distances are strictly enforced.</li>
          <li>Induction from parallel circuits is common.</li>
          <li>Working at heights requires fall protection and proper climbing or aerial lift practices.</li>
          <li>Weather (wind, ice, lightning) dramatically changes the risk profile.</li>
        </ul>
      </div>

      <div class="section">
        <h2>4. Underground Systems</h2>
        <p>Underground cables, vaults, manholes, and pad-mounted equipment present different challenges:</p>
        <ul>
          <li>Confined space hazards (atmosphere, egress, communication).</li>
          <li>Cable terminations and splices require cleanliness and precise workmanship.</li>
          <li>Induced voltages on cable shields and concentric neutrals can be significant.</li>
          <li>Dig-ins and damage from excavation are constant risks for the system.</li>
        </ul>
      </div>

      <div class="section">
        <h2>5. Communication and Situational Awareness</h2>
        <p>In the field you are part of a crew and part of a larger system. Good practices include:</p>
        <ul>
          <li>Job briefings at the start of every job and after any significant change.</li>
          <li>Clear roles — who is switching, who is testing, who is watching.</li>
          <li>Constant awareness of what is energized, what is grounded, and what is in transition.</li>
          <li>Speaking up immediately if something looks wrong or if you lose track of the status of the system.</li>
        </ul>
      </div>

      <div class="takeaways">
        <h3>🔑 Key Takeaways</h3>
        <ul>
          <li>Learn the basic power flow and major components of the substations you work in.</li>
          <li>Overhead and underground systems have different dominant hazards — learn both.</li>
          <li>One-line diagrams are your map; get comfortable reading them early.</li>
          <li>Situational awareness and clear communication are as important as technical skill.</li>
          <li>Weather, traffic, and other crews all affect the risk of the job.</li>
        </ul>
      </div>
    `,
    questions: [
      {
        q: "What is one of the most valuable early skills for working in substations?",
        options: [
          "Climbing poles",
          "Reading one-line diagrams",
          "Operating heavy equipment",
          "Writing switching programs from scratch"
        ],
        answer: 1
      },
      {
        q: "Which hazard is especially common on underground cable systems?",
        options: [
          "Bird nesting",
          "Induced voltages on shields and concentric neutrals, plus confined space issues",
          "Ice loading",
          "Conductor galloping"
        ],
        answer: 1
      },
      {
        q: "When should a job briefing be held?",
        options: [
          "Only on the first day of a multi-day job",
          "At the start of every job and after any significant change in conditions or scope",
          "Only when the supervisor is present",
          "Only for energized work"
        ],
        answer: 1
      }
    ]
  },

  // ========== MODULE 9 ==========
  {
    id: 8,
    number: "09",
    title: "Professional Habits & Continuous Learning",
    intro: "Technical knowledge gets you started. Professional habits and a commitment to continuous learning will determine how far you go and how safe you remain.",
    objectives: [
      "Recognize the importance of documentation and accurate records",
      "Develop good habits around job briefings and asking questions",
      "Understand human factors that lead to errors",
      "Commit to continuous learning throughout your career",
      "Know how to progress from apprentice to competent journeyman"
    ],
    content: `
      <div class="section">
        <h2>1. Documentation and Record Keeping</h2>
        <p>High voltage work generates records: switching orders, clearance forms, test results, maintenance reports, and as-built drawings. Accurate documentation protects you, your crew, and the next person who works on the equipment.</p>
        <p>Get in the habit of writing clearly, recording actual values (not just “OK”), and noting anything unusual. Future you (and your coworkers) will thank you.</p>
      </div>

      <div class="section">
        <h2>2. Job Briefings and Asking Questions</h2>
        <p>A good job briefing covers:</p>
        <ul>
          <li>What are we doing?</li>
          <li>What are the hazards?</li>
          <li>How are we controlling those hazards?</li>
          <li>Who does what?</li>
          <li>What is the emergency plan?</li>
        </ul>
        <p>As an apprentice, your job is to listen carefully and ask questions when anything is unclear. There is no such thing as a stupid question when the alternative is a mistake that can kill someone.</p>
        <div class="callout callout-success">
          <div class="callout-title">Strong Habit</div>
          <p>If you do not understand a step, stop the job and ask. Experienced workers respect apprentices who care enough to clarify.</p>
        </div>
      </div>

      <div class="section">
        <h2>3. Human Factors</h2>
        <p>Most incidents involve human factors:</p>
        <ul>
          <li><strong>Fatigue</strong> — Long outages, night work, and storm restoration degrade judgment.</li>
          <li><strong>Time pressure</strong> — “We need to get this back online” can push people to skip steps.</li>
          <li><strong>Complacency</strong> — Familiarity with a task can reduce attention.</li>
          <li><strong>Assumptions</strong> — Assuming someone else verified a condition is a classic failure mode.</li>
          <li><strong>Distraction</strong> — Phones, side conversations, and multiple simultaneous tasks.</li>
        </ul>
        <p>Recognizing these factors in yourself and others is part of becoming a professional.</p>
      </div>

      <div class="section">
        <h2>4. Continuous Learning</h2>
        <p>The technology, standards, and best practices in this trade continue to evolve. Good electricians never stop learning.</p>
        <ul>
          <li>Read manufacturer literature on the equipment you work on.</li>
          <li>Study one-line diagrams and protection schemes of the systems you maintain.</li>
          <li>Take advantage of every training opportunity your employer offers.</li>
          <li>Learn from near-misses and incidents (your own and others’).</li>
          <li>Stay current with updates to NFPA 70E, OSHA interpretations, and your company’s procedures.</li>
        </ul>
      </div>

      <div class="section">
        <h2>5. Progressing as an Apprentice</h2>
        <p>Your progression depends on three things:</p>
        <ol>
          <li><strong>Attitude</strong> — Show up ready to work, ready to learn, and ready to put safety first.</li>
          <li><strong>Skills</strong> — Deliberately practice the tasks you are given until they become reliable.</li>
          <li><strong>Knowledge</strong> — Understand not only how to do a task, but why it is done that way.</li>
        </ol>
        <p>Seek feedback. Volunteer for tasks that stretch you (within your current qualification). Take notes. Review them. The apprentices who treat every day as training become the journeymen that crews trust.</p>
      </div>

      <div class="takeaways">
        <h3>🔑 Key Takeaways</h3>
        <ul>
          <li>Good documentation protects everyone and improves future work.</li>
          <li>Ask questions early and often — clarity prevents incidents.</li>
          <li>Fatigue, pressure, complacency, and assumptions are constant enemies.</li>
          <li>Commit to continuous learning; the trade will keep changing.</li>
          <li>Attitude, deliberate practice, and deep understanding drive your progression.</li>
        </ul>
      </div>

      <div class="callout callout-info">
        <div class="callout-title">Final Thought</div>
        <p>You are beginning a career that demands respect for energy, for procedures, and for the people who work beside you. Build strong habits now. They will serve you for decades.</p>
      </div>
    `,
    questions: [
      {
        q: "What should you do if you do not understand a step in a switching order or work procedure?",
        options: [
          "Continue and figure it out as you go",
          "Stop and ask for clarification before proceeding",
          "Ask only after the job is finished",
          "Watch someone else and copy them silently"
        ],
        answer: 1
      },
      {
        q: "Which human factor commonly contributes to incidents during long outages or storm work?",
        options: [
          "Too much training",
          "Fatigue and time pressure",
          "Excessive documentation",
          "Over-communication"
        ],
        answer: 1
      },
      {
        q: "What three elements drive progression from apprentice to trusted journeyman?",
        options: [
          "Speed, strength, and seniority",
          "Attitude, skills, and knowledge",
          "Tools, truck, and title",
          "Luck, connections, and overtime"
        ],
        answer: 1
      }
    ]
  }
];
