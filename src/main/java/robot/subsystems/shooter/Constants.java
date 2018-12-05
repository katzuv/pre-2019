package robot.subsystems.shooter;

class Constants {
    static final boolean TALON_INVERTED = false;
    static final boolean VICTOR_INVERTED = false;

    static final double DISTANCE_PER_PULSE = 0;
    static final double WHEEL_RADIUS = 0;

    static final double kP = 0, kI = 0, kD = 0, kF = 0;
    static final int kPIDLoopIdx = 0;
    static final int kTimeoutMs = 30; //set to zero to skip waiting for confirmation, set to nonzero to wait and report to DS if action fails.

}