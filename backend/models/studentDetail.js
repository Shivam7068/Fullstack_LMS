import mongoose from "mongoose";


const otherResponse = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name "]
    },
    whatsappNumber: {
        type: String,
        required: [true, 'Phone number is required'],
        match: [/^\d{10}$/, 'Phone number must be exactly 10 digits']
    },
    courseSelected: {
        type: String,
        required: [true, "Please Selct Course "]
    },
    source: {
        type: String,
        required: [true, "Please enter your source "]
    },
    sourceId: {
        type: String,
        required: [true, "Please enter source Id "]
    },
    preffredCollege: {
        type: String,
        required: [true, "Please Selct Preffred College "]
    },
    contactNumber: {
        type: String,
        required: [true, 'Phone number is required'],
        match: [/^\d{10}$/, 'Phone number must be exactly 10 digits']
    },
    email: {
        type: String,
        required: [true, "Please enter your email "]
    },
    submitedAt: {
        type: Date,
        default: Date.now
    }
})



const studentDetailSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name "]
        },

        contactNumber: {
            type: String,
            required: [true, 'Phone number is required'],
            match: [/^\d{10}$/, 'Phone number must be exactly 10 digits']
        },

        isMobileVerified: {
            type: Boolean,
            default: false
        },

        email: {
            type: String,
            required: [true, "Please enter your email "]
        },

        isEmailVerified: {
            type: Boolean,
            default: false
        },

        whatsappNumber: {
            type: String,
            required: [true, 'Phone number is required'],
            match: [/^\d{10}$/, 'Phone number must be exactly 10 digits']
        },

        fatherName: {
            type: String,
            required: [true, "Please enter your father's Name "]
        },

        city: {
            type: String,
            required: [true, "Please enter your city "]
        },

        state: {
            type: String,
            required: [true, "Please enter your state "]
        },

        courseSelected: {
            type: String,
            required: [true, "Please Selct Course "]
        },

        preffredCollege: {
            type: String,
            required: [true, "Please Selct Preffred College "]
        },

        source: {
            type: String,
            required: [true, "Please enter your source "]
        },

        sourceId: {
            type: String,
            required: [true, "Please enter source Id "]
        },

        neetScore: {
            type: Number,
            required: [true, 'Marks are required'],
        },
        remarks: [
            {
                type: String,
            }
        ],
        neetAir: {
            type: Number,
        },
        assignedCouns: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Counsellor"
            }
        ],
        otherResponse: [otherResponse]
    }, { timestamps: true }
)

const studentModal = mongoose.model('Student', studentDetailSchema)

export default studentModal


