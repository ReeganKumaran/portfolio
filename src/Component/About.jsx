import React from "react";
import { assets } from "../assets";

function About() {
  return (
    <div className="bg-gradient-to-l from-gray-900 via-back to-black w-full pt-20">
      <div className="flex items-center p-5 justify-between ">
    
        <p className="w-[50%] p-10  text-white font-libertinus regular ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          cumque unde vero, aut dolor possimus consectetur veritatis harum earum
          voluptatum, fuga omnis quia maiores quae, quos itaque sed inventore
          optio sapiente deserunt minus ut quis consequuntur deleniti. Tempora,
          aliquam. Blanditiis ipsam veritatis voluptates sunt cum, harum iusto
          suscipit, maiores doloribus nobis dolores! Aliquid, a accusantium illo
          similique animi quos impedit delectus doloribus! Dicta est doloremque,
          incidunt atque modi error praesentium tenetur officiis veniam, quia
          eaque commodi. Commodi explicabo iste ipsam quod tempora voluptates
          corrupti facere impedit dolor, maxime aperiam maiores, autem
          voluptatibus, repudiandae sint qui aliquam dicta modi tenetur minima?
          Quod labore quia, atque placeat corrupti neque magni autem itaque vero
          tempore minima? Nostrum quaerat incidunt nisi, quidem molestiae ipsa
          similique eos itaque, ullam minus architecto libero inventore id
          blanditiis aut molestias magni asperiores, repudiandae dolor
          consequatur maxime qui quia cum voluptatem. Qui laboriosam
          exercitationem odit sapiente quod iste vero tempore eos sed voluptas.
          Animi aliquam vel beatae commodi quia, dicta debitis. Praesentium
          sapiente quia tempora beatae non nulla dolore exercitationem accusamus
          atque voluptates officia cupiditate, sed doloribus mollitia architecto
          dolorem facilis aut. Sequi odit officiis cumque consequatur rem
          exercitationem laudantium. Tempore exercitationem id fuga accusantium,
          earum mollitia temporibus? Sint.
        </p>
        {/* mask-t-from-90% mask-l-from-70% mask-r-from-70% mask-b-from-70%  */}
        <div className="-mask-linear-50 mask-linear-from-60% mask-linear-to-100%">
          <div className="mask-linear-50 mask-linear-from-70% mask-linear-to-100%">
            <img
              className="mask-t-from-80% mask-l-from-40% mask-r-from-70% mask-b-from-30% "
              width={800}
              src={assets.photo}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
