import React from "react";
import "./Profile.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { logout } = useAuth0();

  return (
    <>
      <div class="profile">
        <div class="mainCard left-card">
          <div class="mainCard__header">
            <span>user</span>
          </div>
          <div class="profile_image">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="profile_image"
            />
          </div>
          <div class="personal_details">
            <div>
              <label>First Name</label>
              <input
                class="input-default"
                type="text"
                placeholder="First Name"
              />
              <input
                class="input-default"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                class="input-default"
                type="text"
                placeholder="Last Name"
              />
              <input
                class="input-default"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label>Email</label>
              <input class="input-default" type="text" placeholder="Email" />
              <input class="input-default" type="text" placeholder="Email" />
            </div>
            <div>
              <label>Residence place</label>
              <input
                class="input-default"
                type="text"
                placeholder="Residence"
              />
              <input
                class="input-default"
                type="text"
                placeholder="Residence"
              />
            </div>
            <div class="buttons" v-if="isOwnProfile()"></div>

            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
    //       <div class="right-card">
    //         <div class="mainCard">
    //           <div class="mainCard__header">
    //             <div class="header-action">
    //               <span>Educations</span>
    //               <div class="addNew btn" v-if="isOwnProfile()" @click="showModal = true" style="cursor: pointer">Add</div>
    //             </div>
    //           </div>
    //           <div class="educations">
    //             <div v-for="education in educations" :key="education">
    //               <div class="education" style="cursor: no-drop" title="Remove education">
    //                 <p>{{ education.name }} -</p>
    //                 <p>{{ education.location }}</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div >
    //         <div class="mainCard">
    //           <div class="mainCard__header">
    //             <div class="header-action">
    //               <span>Specializations</span>
    //               <div class="addNew btn" v-if="isOwnProfile()" @click="showModalSpecialization = true"
    //                 style="cursor: pointer">
    //                 Add
    //               </div>
    //             </div>
    //           </div>
    //           <div class="educations">
    //             <div v-for="specialization in specializations" :key="specialization">
    //               <div class="education" style="cursor: no-drop" title="Remove specialization">
    //                 {/* <p>{{ specialization.name }}</p> */}

    //               </div>
    //             </div>

    //           </div >
    //         </div >
    //       </div >
    //     </div >
    //   </div >
    //   </>

    /* <Teleport to="body">
                <modal :show="showModal" @close="showModal = false" @save="saveEducation">
                <template #header>
                    <h3>Add education to your profile</h3>
                </template>
                <template #body>
                    <div class="modal-body">
                        <label>Education name</label>
                        <!-- select with options of allEducations, where the chosen education is stored -->
                        <select v-model="chosenEducation">
                            <option v-for="education in allEducations" :key="education.id" :value="education">
                            {{ education.name }} || {{ education.school }}
                        </option>
                    </select>
                </div>
            </template>
        </modal > */
    /* </Teleport >
            <Teleport to="body">
                <modal :show="showModalSpecialization" @close="showModalSpecialization = false" @save="saveSpecialization">
                <template #header>
                    <h3>Add education to your profile</h3>
                </template>
                <template #body>
                    <div class="modal-body">
                        <label>Specialization name</label>
                        <select v-model="chosenSpecialization">
                            <option v-for="specialization in allSpecializations" :key="specialization.id" :value="specialization">
                            {{ specialization.name }}
                        </option>
                    </select>
                </div>
            </template>
    //     </modal >
    //   </Teleport > */
    //     {/* </template >
    //         </div >
    //     ) */}
  );
}
