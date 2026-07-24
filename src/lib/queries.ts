export const courseListQuery = `*[_type == "course" && isActive == true] | order(createdAt desc) {
  _id,
  title,
  titleTa,
  duration,
  durationCategory,
  fee,
  feeBucket,
  category,
  topic,
  language,
  scheduleSlot,
  schedule,
  syllabus,
  isActive,
  createdAt,
  "teacher": teacher->{
    _id,
    name,
    photoUrl,
    bio,
    yearsExperience
  }
}`;

export const courseByIdQuery = `*[_type == "course" && _id == $id][0] {
  _id,
  title,
  titleTa,
  duration,
  durationCategory,
  fee,
  feeBucket,
  category,
  topic,
  language,
  scheduleSlot,
  schedule,
  syllabus,
  isActive,
  createdAt,
  "teacher": teacher->{
    _id,
    name,
    photoUrl,
    bio,
    yearsExperience
  }
}`;

export const explorePageQuery = `*[_type == "explorePage"][0] {
  pageTitle,
  pageSubtitle,
  badgeText,
  liveOnlyBadge,
  noRefundsNotice,
  "featuredCourses": featuredCourseIds[]->{
    _id,
    title,
    titleTa,
    duration,
    durationCategory,
    fee,
    feeBucket,
    category,
    topic,
    language,
    scheduleSlot,
    schedule,
    syllabus,
    isActive,
    createdAt,
    "teacher": teacher->{
      _id,
      name,
      photoUrl,
      bio,
      yearsExperience
    }
  }
}`;

export const teachersQuery = `*[_type == "teacher"] {
  _id,
  name,
  photoUrl,
  bio,
  yearsExperience
}`;
