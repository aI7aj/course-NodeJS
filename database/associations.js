import User from "./models/user.model.js";
import Course from "./models/course.model.js";
import Review from "./models/review.model.js";
import Enrollment from "./models/enrollment.model.js";

User.belongsToMany(Course, { through: Enrollment });
Course.belongsToMany(User, { through: Enrollment });

User.hasMany(Review, { foreignKey: "userId" });
Review.belongsTo(User, { foreignKey: "userId" });

Course.hasMany(Review, { foreignKey: "courseId" });
Review.belongsTo(Course, { foreignKey: "courseId" });
