function Skill () {
    return (
        <div id="skill">
        <h2 id="title">PROGRAMS & SKILL</h2>
        <div id="programs-box">
          <div id="programs">
            <img src="/blender.png" alt="" class="program-img" />
            <h3>BLENDER</h3>
            <p>Modeling, texturing, Lighting and Shading, Animation</p>
          </div>
          <div id="programs">
            <img src="/unity.png" alt="" class="program-img" />
            <h3>UNITY</h3>
            <p>
              Character movement, Environment building, Prefabs, Animation,
              Probuilder, C#
            </p>
          </div>
          <div id="programs">
            <img
              src="/photoshop.png"
              alt=""
              class="program-img"
              id="ps"
            />
            <h3>PHOTOSHOP</h3>
            <p>Graphics design, Texture creation, Web design</p>
          </div>
          <div id="programs">
            <img src="/vscode.png" alt="" class="program-img" />
            <h3>VS Code</h3>
            <p>HTML, CSS, JavaScript, Python, C#</p>
          </div>
        </div>
      </div>
    )
}

export default Skill;